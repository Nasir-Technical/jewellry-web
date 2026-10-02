const validateShippingAddress = (address) => {
    if (!address || typeof address !== 'object' || Array.isArray(address)) {
        throw new Error('Shipping address is required');
    }

    const requiredFields = ['firstName', 'lastName', 'email', 'line1', 'city', 'postalCode', 'country'];

    for (const field of requiredFields) {
        if (typeof address[field] !== 'string' || !address[field].trim()) {
            throw new Error(`Shipping address ${field} is required`);
        }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address.email.trim())) {
        throw new Error('Shipping address email is invalid');
    }

    return {
        firstName: address.firstName.trim(),
        lastName: address.lastName.trim(),
        email: address.email.trim().toLowerCase(),
        phone: typeof address.phone === 'string' ? address.phone.trim() : '',
        line1: address.line1.trim(),
        line2: typeof address.line2 === 'string' ? address.line2.trim() : '',
        city: address.city.trim(),
        postalCode: address.postalCode.trim(),
        country: address.country.trim()
    };
};

const validateOrder = (req, res, next) => {
    try {
        const body = req.body || {};
        const shippingAddress = validateShippingAddress(body.shippingAddress);
        const paymentInfo = body.paymentInfo || {};

        if (paymentInfo.method !== undefined && typeof paymentInfo.method !== 'string') {
            throw new Error('Payment method must be a string');
        }

        if (paymentInfo.transactionId !== undefined && typeof paymentInfo.transactionId !== 'string') {
            throw new Error('Payment transaction ID must be a string');
        }

        req.validatedOrder = {
            shippingAddress,
            paymentInfo: {
                method: typeof paymentInfo.method === 'string' && paymentInfo.method.trim() ? paymentInfo.method.trim() : 'pending',
                transactionId: typeof paymentInfo.transactionId === 'string' ? paymentInfo.transactionId.trim() : '',
                status: 'pending'
            },
            shippingCost: 0
        };

        next();
    } catch (error) {
        res.status(400);
        next(error);
    }
};

module.exports = {
    validateOrder
};
