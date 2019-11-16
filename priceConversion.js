const priceConversion = {
    letters_stamped: {
        name: "Letters (stamped)",
        maxWeight: 3.5,
        1: 0.55,
        2: 0.70,
        3: 0.85,
        3.5: 1.00
    },

    letters_metered: {
        name: "Letters (Metered)",
        maxWeight: 3.5,
        1: 0.5,
        2: 0.65,
        3: 0.80,
        3.5: 0.95
    },

    large_envelopes_flat: {
        name: "Large Envelopes (Flat)",
        maxWeight: 13,
        1: 1.00,
        2: 1.15,
        3: 1.30,
        4: 1.45,
        5: 1.60,
        6: 1.75,
        7: 1.90,
        8: 2.05,
        9: 2.20,
        10: 2.34,
        11: 2.50,
        12: 2.65,
        13: 2.80
    },

    first_class_package_service_retail: {
        name: "First-Class package service retail",
        maxWeight: 13,
        1: 3.78,
        2: 3.78,
        3: 3.78,
        4: 3.78,
        5: 4.53,
        6: 4.53,
        7: 4.53,
        8: 4.53,
        9: 5.35,
        10: 5.35,
        11: 5.35,
        12: 5.35,
        13: 5.93
    }
}

// You always have to export the file to use it
module.exports = priceConversion;