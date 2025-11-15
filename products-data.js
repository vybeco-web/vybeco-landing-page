// ===== LG SUBSCRIBE PRODUCTS DATABASE =====
// 35+ Products dengan specs lengkap dari semua poster

const productsData = [
    // ===== AIR CONDITIONERS =====
    {
        id: "ac-artcool-1.5hp",
        name: "ArtCool Dual Inverter Air Conditioner",
        model: "S3-Q12JARPA (1.5HP)",
        category: "ac",
        emoji: "❄️",
        features: [
            "Dual Inverter Technology",
            "ArtCool Mirror Design", 
            "5 Tahun Servis Setahun Sekali",
            "Energy Efficient",
            "Quick Cooling"
        ],
        monthlyPrice: "50",
        originalPrice: "100",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "ac-artcool-2.5hp",
        name: "ArtCool Dual Inverter Air Conditioner", 
        model: "S3-Q24K2RPA (2.5HP)",
        category: "ac",
        emoji: "❄️",
        features: [
            "Dual Inverter Technology",
            "ArtCool Mirror Design",
            "5 Tahun Servis Setahun Sekali", 
            "Powerful Cooling",
            "Wi-Fi Control Ready"
        ],
        monthlyPrice: "65",
        originalPrice: "130",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "ac-dual-1.0hp",
        name: "Dual Inverter Air Conditioner",
        model: "S3-Q09JAPPA (1.0HP)",
        category: "ac",
        emoji: "🌬️",
        features: [
            "Dual Inverter Compressor",
            "5 Tahun Servis Setahun Sekali",
            "Energy Saving",
            "Quiet Operation",
            "Auto Clean"
        ],
        monthlyPrice: "40",
        originalPrice: "80", 
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "ac-dual-1.5hp",
        name: "Dual Inverter Air Conditioner",
        model: "S3-Q12JAPPA (1.5HP)",
        category: "ac",
        emoji: "🌬️",
        features: [
            "Dual Inverter Compressor",
            "5 Tahun Servis Setahun Sekali",
            "Fast Cooling",
            "Low Noise",
            "Smart Diagnosis"
        ],
        monthlyPrice: "45",
        originalPrice: "90",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "ac-dual-2.0hp",
        name: "Dual Inverter Air Conditioner",
        model: "S3-Q18KLPPA (2.0HP)",
        category: "ac",
        emoji: "🌬️",
        features: [
            "Dual Inverter Compressor", 
            "5 Tahun Servis Setahun Sekali",
            "Powerful Performance",
            "Energy Efficient",
            "4D Airflow"
        ],
        monthlyPrice: "55",
        originalPrice: "110",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "ac-dual-2.5hp",
        name: "Dual Inverter Air Conditioner",
        model: "S3-Q24K2PPA (2.5HP)",
        category: "ac",
        emoji: "🌬️",
        features: [
            "Dual Inverter Compressor",
            "5 Tahun Servis Setahun Sekali", 
            "High Capacity Cooling",
            "Smart ThinQ Enabled",
            "Auto Changeover"
        ],
        monthlyPrice: "60",
        originalPrice: "120",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },

    // ===== SMART TVs =====
    {
        id: "tv-oled-77",
        name: "LG OLED AI TV B5",
        model: "OLED77B5PSA (77\")",
        category: "tv",
        emoji: "📺",
        features: [
            "World's No.1 OLED TV 12 Years",
            "AI Picture & Sound Pro",
            "Dolby Vision & HDR10",
            "5 Tahun Self-Service",
            "α9 AI Processor 4K"
        ],
        monthlyPrice: "280",
        originalPrice: "560",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "tv-qned-evo-65",
        name: "LG QNED Evo AI TV",
        model: "65QNED87ASA (65\")",
        category: "tv",
        emoji: "📺",
        features: [
            "QNED Evo AI Technology",
            "4K UHD Resolution", 
            "Dolby Vision & HDR10",
            "5 Tahun Self-Service",
            "AI Sound Pro"
        ],
        monthlyPrice: "68",
        originalPrice: "135",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "tv-qned-evo-75",
        name: "LG QNED Evo AI TV", 
        model: "75QNED87ASA (75\")",
        category: "tv",
        emoji: "📺",
        features: [
            "QNED Evo AI Technology",
            "4K UHD Resolution",
            "Dolby Vision & HDR10",
            "5 Tahun Self-Service", 
            "WebOS Smart TV"
        ],
        monthlyPrice: "100",
        originalPrice: "200",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "tv-qned-miniled-75",
        name: "LG QNED MINI LED TV",
        model: "75QNED91TSA (75\")",
        category: "tv",
        emoji: "📺",
        features: [
            "MINI LED Technology",
            "4K UHD Resolution",
            "Full Array Local Dimming",
            "5 Tahun Self-Service",
            "α7 AI Processor 4K"
        ],
        monthlyPrice: "115", 
        originalPrice: "230",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "tv-nanocell-65",
        name: "LG NanoCell AI TV",
        model: "65NANO83ASB (65\")",
        category: "tv",
        emoji: "📺",
        features: [
            "NanoCell Technology",
            "4K UHD Resolution",
            "HDR10 Pro",
            "5 Tahun Self-Service",
            "AI Picture & Sound"
        ],
        monthlyPrice: "43",
        originalPrice: "85",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "tv-nanocell-75", 
        name: "LG NanoCell AI TV",
        model: "75NANO83ASB (75\")",
        category: "tv",
        emoji: "📺",
        features: [
            "NanoCell Technology",
            "4K UHD Resolution", 
            "HDR10 Pro",
            "5 Tahun Self-Service",
            "Smart ThinQ AI"
        ],
        monthlyPrice: "55",
        originalPrice: "110",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },

    // ===== REFRIGERATORS =====
    {
        id: "fridge-491l-top",
        name: "491L Top Freezer Refrigerator",
        model: "GN-F452PQAK",
        category: "fridge",
        emoji: "🧊",
        features: [
            "491 Liter Capacity",
            "Top Freezer Design",
            "Door Cooling+ Technology",
            "5 Tahun Servis Plan",
            "Energy Efficient"
        ],
        plans: [
            {
                duration: "5 Tahun",
                type: "Servis setiap 24 bulan",
                monthlyPrice: "40",
                originalPrice: "80"
            },
            {
                duration: "5 Tahun", 
                type: "Servis setiap 12 bulan",
                monthlyPrice: "50",
                originalPrice: "100"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "fridge-635l-side",
        name: "635L Side-by-Side Refrigerator",
        model: "GC-J257SQNW",
        category: "fridge",
        emoji: "🧊",
        features: [
            "635 Liter Capacity", 
            "Side-by-Side Design",
            "InstaView Door-in-Door",
            "5 Tahun Servis Plan",
            "Smart Diagnosis"
        ],
        plans: [
            {
                duration: "5 Tahun",
                type: "Servis setiap 24 bulan", 
                monthlyPrice: "65",
                originalPrice: "130"
            },
            {
                duration: "5 Tahun",
                type: "Servis setiap 12 bulan",
                monthlyPrice: "75", 
                originalPrice: "150"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "fridge-508l-multi",
        name: "508L Multi-Door Refrigerator",
        model: "GC-G22FFQAB",
        category: "fridge",
        emoji: "🧊",
        features: [
            "508 Liter Capacity",
            "Multi-Door Design", 
            "DoorCooling+ Technology",
            "5 Tahun Servis Plan",
            "SpacePlus Ice System"
        ],
        plans: [
            {
                duration: "5 Tahun",
                type: "Servis setiap 24 bulan",
                monthlyPrice: "80",
                originalPrice: "160"
            },
            {
                duration: "5 Tahun",
                type: "Servis setiap 12 bulan", 
                monthlyPrice: "90",
                originalPrice: "180"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "fridge-641l-side",
        name: "641L Side-by-Side Refrigerator",
        model: "GC-L257KQKR",
        category: "fridge",
        emoji: "🧊", 
        features: [
            "641 Liter Capacity",
            "Side-by-Side Design",
            "InstaView Technology",
            "5 Tahun Servis Plan",
            "Linear Cooling"
        ],
        plans: [
            {
                duration: "5 Tahun",
                type: "Servis setiap 24 bulan",
                monthlyPrice: "60", 
                originalPrice: "120"
            },
            {
                duration: "5 Tahun",
                type: "Servis setiap 12 bulan",
                monthlyPrice: "70",
                originalPrice: "140"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "fridge-612l-mdf",
        name: "612L MDF Refrigerator",
        model: "GV-K25FFGER",
        category: "fridge",
        emoji: "🧊",
        features: [
            "612 Liter Capacity",
            "Multi Door French Door", 
            "White Glass Finish",
            "5 Tahun Servis Plan",
            "Smart Cooling System"
        ],
        plans: [
            {
                duration: "5 Tahun",
                type: "Servis setiap 24 bulan",
                monthlyPrice: "90",
                originalPrice: "180"
            },
            {
                duration: "5 Tahun",
                type: "Servis setiap 12 bulan",
                monthlyPrice: "100", 
                originalPrice: "200"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "fridge-665l-multi",
        name: "665L Multi-Door Refrigerator",
        model: "GC-B24FFCPB",
        category: "fridge",
        emoji: "🧊",
        features: [
            "665 Liter Capacity",
            "Multi-Door Design",
            "Door-in-Door Technology", 
            "5 Tahun Servis Plan",
            "Smart ThinQ Enabled"
        ],
        monthlyPrice: "65",
        originalPrice: "130",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },

    // ===== WASHING MACHINES =====
    {
        id: "washer-20kg-front",
        name: "20Kg Front Load Washer",
        model: "F2520SNEKR",
        category: "washer",
        emoji: "🧺",
        features: [
            "20kg Capacity",
            "Front Load Design", 
            "AI Direct Drive™",
            "5 Tahun Servis Plan",
            "Steam™ Technology"
        ],
        plans: [
            {
                duration: "5 Tahun",
                type: "Combined Maintenance",
                monthlyPrice: "60",
                originalPrice: "120"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit", 
                monthlyPrice: "65",
                originalPrice: "130"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "washer-10.5kg-front",
        name: "10.5Kg Front Load Washer",
        model: "FV1450S2W",
        category: "washer",
        emoji: "🧺",
        features: [
            "10.5kg Capacity",
            "Front Load Design",
            "Direct Drive Motor", 
            "5 Tahun Servis Plan",
            "6 Motion Technology"
        ],
        plans: [
            {
                duration: "5 Tahun",
                type: "Combined Maintenance",
                monthlyPrice: "45",
                originalPrice: "90"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "50", 
                originalPrice: "100"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "washer-20kg-top",
        name: "20kg Top Load Washer",
        model: "TV2520SV9KR",
        category: "washer",
        emoji: "🧺",
        features: [
            "20kg Capacity",
            "Top Load Design", 
            "TurboWash™ Technology",
            "5 Tahun Servis Plan",
            "Smart Diagnosis"
        ],
        plans: [
            {
                duration: "5 Tahun",
                type: "Combined Maintenance",
                monthlyPrice: "50",
                originalPrice: "100"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "55", 
                originalPrice: "110"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "washer-17kg-top",
        name: "17kg Top Load Washer",
        model: "TV2517DV3B",
        category: "washer",
        emoji: "🧺",
        features: [
            "17kg Capacity",
            "Top Load Design",
            "TurboDrum Technology", 
            "5 Tahun Servis Plan",
            "Energy Saving"
        ],
        plans: [
            {
                duration: "5 Tahun",
                type: "Combined Maintenance",
                monthlyPrice: "43",
                originalPrice: "85"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "48",
                originalPrice: "95" 
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "washer-dryer-9-5kg",
        name: "9/5kg Front Load Washer Dryer",
        model: "FV1209D4W",
        category: "washer",
        emoji: "🧺",
        features: [
            "9kg Wash / 5kg Dry",
            "Washer Dryer Combo",
            "AI Direct Drive™", 
            "Steam™ Technology",
            "5 Tahun Servis Plan"
        ],
        plans: [
            {
                duration: "5 Tahun",
                type: "Combined Maintenance",
                monthlyPrice: "60",
                originalPrice: "120"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "65", 
                originalPrice: "130"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "washer-dryer-15-8kg",
        name: "15kg Wash | 8kg Dry Washer Dryer",
        model: "F2515RNTKAR",
        category: "washer",
        emoji: "🧺",
        features: [
            "15kg Wash / 8kg Dry",
            "Washer Dryer Combo", 
            "Heat Pump Technology",
            "5 Tahun Servis Plan",
            "Smart ThinQ"
        ],
        plans: [
            {
                duration: "5 Tahun",
                type: "Combined Maintenance",
                monthlyPrice: "70",
                originalPrice: "140"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "75",
                originalPrice: "150" 
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "dryer-9kg-heatpump",
        name: "9kg Heat Pump Dryer",
        model: "VD-H9066WS",
        category: "washer",
        emoji: "🔥",
        features: [
            "9kg Drying Capacity",
            "Heat Pump Technology", 
            "Energy Efficient",
            "5 Tahun Servis Plan",
            "Sensor Dry"
        ],
        plans: [
            {
                duration: "5 Tahun",
                type: "Combined Maintenance",
                monthlyPrice: "50",
                originalPrice: "100"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "55",
                originalPrice: "110" 
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },

    // ===== AIR PURIFIERS =====
    {
        id: "purifier-360-single",
        name: "360° Single Booster Air Purifier",
        model: "AS65GDWB0",
        category: "purifier",
        emoji: "💨",
        features: [
            "360° Air Circulation",
            "Single Booster Technology", 
            "7 Tahun Servis Plan",
            "H13 HEPA Filter",
            "Smart Air Quality Sensor"
        ],
        plans: [
            {
                duration: "7 Tahun",
                type: "Self-Care",
                monthlyPrice: "35",
                originalPrice: "70"
            },
            {
                duration: "7 Tahun",
                type: "Regular Visit",
                monthlyPrice: "50", 
                originalPrice: "100"
            },
            {
                duration: "5 Tahun",
                type: "Self-Care",
                monthlyPrice: "50",
                originalPrice: "100"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "60",
                originalPrice: "120" 
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "purifier-360-aero",
        name: "360° Aero Booster Air Purifier",
        model: "AS55GG",
        category: "purifier",
        emoji: "💨",
        features: [
            "360° Aero Circulation",
            "Dual Booster Technology", 
            "7 Tahun Servis Plan",
            "3-Stage Filtration",
            "Auto Mode"
        ],
        plans: [
            {
                duration: "7 Tahun",
                type: "Self-Care",
                monthlyPrice: "33",
                originalPrice: "65"
            },
            {
                duration: "7 Tahun",
                type: "Regular Visit",
                monthlyPrice: "43",
                originalPrice: "85" 
            },
            {
                duration: "5 Tahun",
                type: "Self-Care",
                monthlyPrice: "48",
                originalPrice: "95"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "58",
                originalPrice: "115"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "purifier-aero-hit",
        name: "Aero HIT Air Purifier",
        model: "AS606H",
        category: "purifier",
        emoji: "💨",
        features: [
            "HIT Technology", 
            "Compact Design",
            "7 Tahun Servis Plan",
            "HEPA Filtration",
            "Low Noise Operation"
        ],
        plans: [
            {
                duration: "7 Tahun",
                type: "Self-Care",
                monthlyPrice: "25",
                originalPrice: "50"
            },
            {
                duration: "7 Tahun",
                type: "Regular Visit",
                monthlyPrice: "40",
                originalPrice: "80" 
            },
            {
                duration: "5 Tahun",
                type: "Self-Care",
                monthlyPrice: "40",
                originalPrice: "80"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "50",
                originalPrice: "100"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "purifier-360-dual",
        name: "360° Dual Booster Air Purifier",
        model: "AS60GDWB0",
        category: "purifier",
        emoji: "💨",
        features: [
            "360° Dual Circulation",
            "Dual Booster Technology", 
            "7 Tahun Servis Plan",
            "4-Stage Filtration",
            "Smart Control"
        ],
        plans: [
            {
                duration: "7 Tahun",
                type: "Self-Care",
                monthlyPrice: "50",
                originalPrice: "100"
            },
            {
                duration: "7 Tahun",
                type: "Regular Visit",
                monthlyPrice: "60",
                originalPrice: "125" 
            },
            {
                duration: "5 Tahun",
                type: "Self-Care",
                monthlyPrice: "65",
                originalPrice: "130"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "75",
                originalPrice: "150"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "purifier-alpha-pet-single",
        name: "Alpha Pet Single Booster Air Purifier",
        model: "AS65GDBYO",
        category: "purifier",
        emoji: "🐾",
        features: [
            "Pet Allergy Care", 
            "Single Booster Technology",
            "7 Tahun Servis Plan",
            "Pet Hair Filter",
            "Odor Removal"
        ],
        plans: [
            {
                duration: "7 Tahun",
                type: "Self-Care",
                monthlyPrice: "38",
                originalPrice: "75"
            },
            {
                duration: "7 Tahun",
                type: "Regular Visit",
                monthlyPrice: "48",
                originalPrice: "95" 
            },
            {
                duration: "5 Tahun",
                type: "Self-Care",
                monthlyPrice: "53",
                originalPrice: "105"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "63",
                originalPrice: "125"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "purifier-alpha-pet-dual",
        name: "Alpha Pet Dual Booster Air Purifier",
        model: "AS60GDBYO",
        category: "purifier",
        emoji: "🐾",
        features: [
            "Pet Allergy Care",
            "Dual Booster Technology", 
            "7 Tahun Servis Plan",
            "Advanced Pet Filter",
            "Auto Pet Mode"
        ],
        plans: [
            {
                duration: "7 Tahun",
                type: "Self-Care",
                monthlyPrice: "53",
                originalPrice: "105"
            },
            {
                duration: "7 Tahun",
                type: "Regular Visit",
                monthlyPrice: "63",
                originalPrice: "125" 
            },
            {
                duration: "5 Tahun",
                type: "Self-Care",
                monthlyPrice: "68",
                originalPrice: "135"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "78",
                originalPrice: "155"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "purifier-aero-furniture",
        name: "Aero Furniture Air Purifier",
        model: "AS55GF",
        category: "purifier",
        emoji: "🪑",
        features: [
            "Furniture Design", 
            "Blend with Home Decor",
            "7 Tahun Servis Plan",
            "Quiet Operation",
            "Night Mode"
        ],
        plans: [
            {
                duration: "7 Tahun",
                type: "Self-Care",
                monthlyPrice: "30",
                originalPrice: "60"
            },
            {
                duration: "7 Tahun",
                type: "Regular Visit",
                monthlyPrice: "45",
                originalPrice: "80" 
            },
            {
                duration: "5 Tahun",
                type: "Self-Care",
                monthlyPrice: "45",
                originalPrice: "90"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "55",
                originalPrice: "110"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },

    // ===== WATER PURIFIERS =====
    {
        id: "water-s1-slim",
        name: "S1 Slim Stand Water Purifier",
        model: "WS510SN",
        category: "kitchen",
        emoji: "💧",
        features: [
            "Slim Stand Design",
            "Hot, Ambient, Cold Water", 
            "5 Tahun Regular Visit",
            "UV Nano Technology",
            "Child Lock"
        ],
        monthlyPrice: "65",
        originalPrice: "130",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "water-s2-slim",
        name: "S2 Slim Stand Water Purifier",
        model: "WS410GN",
        category: "kitchen",
        emoji: "💧",
        features: [
            "Slim Stand Design",
            "Hot & Cold Water", 
            "5 Tahun Regular Visit",
            "Multi-stage Filtration",
            "Energy Saving"
        ],
        monthlyPrice: "55",
        originalPrice: "110",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "water-atom-4way",
        name: "Atom 4-Way+ Water Purifier",
        model: "WD516AN",
        category: "kitchen",
        emoji: "💧",
        features: [
            "4-Way Water Dispensing",
            "Hot, Ambient, Cold Water", 
            "7 Tahun Servis Plan",
            "Advanced Filtration",
            "Smart Indicator"
        ],
        plans: [
            {
                duration: "7 Tahun",
                type: "Self-Care",
                monthlyPrice: "35",
                originalPrice: "70"
            },
            {
                duration: "7 Tahun",
                type: "Combined Service",
                monthlyPrice: "40",
                originalPrice: "80" 
            },
            {
                duration: "7 Tahun",
                type: "Regular Visit",
                monthlyPrice: "45",
                originalPrice: "90"
            },
            {
                duration: "5 Tahun",
                type: "Self-Care",
                monthlyPrice: "50",
                originalPrice: "100"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },

    // ===== DISHWASHERS =====
    {
        id: "dishwasher-front-control",
        name: "Front Control Smart Wi-fi Dishwasher",
        model: "DFC533FV",
        category: "kitchen",
        emoji: "🍽️",
        features: [
            "Front Control Design",
            "Smart Wi-fi Enabled", 
            "Prime Silver Finish",
            "QuadWash Technology",
            "Auto Door Opening"
        ],
        monthlyPrice: "65",
        originalPrice: "130",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "dishwasher-quadwash",
        name: "QuadWash Freestanding Dishwasher",
        model: "DFC335HM",
        category: "kitchen",
        emoji: "🍽️",
        features: [
            "QuadWash Technology",
            "Freestanding Design", 
            "Matte Black Finish",
            "4 Spray Arms",
            "Auto Cycle"
        ],
        monthlyPrice: "75",
        originalPrice: "150",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },

    // ===== HOME APPLIANCES =====
    {
        id: "dehumidifier-16l",
        name: "16L Dual Inverter Dehumidifier",
        model: "DDi6GM",
        category: "home",
        emoji: "🌫️",
        features: [
            "16L/Day Capacity",
            "Dual Inverter Technology", 
            "7 Tahun Servis Plan",
            "Energy Efficient",
            "Auto Defrost"
        ],
        plans: [
            {
                duration: "7 Tahun",
                type: "Self-Care",
                monthlyPrice: "35",
                originalPrice: "70"
            },
            {
                duration: "7 Tahun",
                type: "Regular Visit",
                monthlyPrice: "45",
                originalPrice: "90" 
            },
            {
                duration: "5 Tahun",
                type: "Self-Care",
                monthlyPrice: "45",
                originalPrice: "90"
            },
            {
                duration: "5 Tahun",
                type: "Regular Visit",
                monthlyPrice: "55",
                originalPrice: "110"
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "vacuum-cordzero-tower",
        name: "CordZero All-in-One Tower Vacuum",
        model: "A9X-RSTEAM.DCBRLML",
        category: "home",
        emoji: "🧹",
        features: [
            "CordZero All-in-One",
            "Tower Steam Design", 
            "5 Tahun Self-Service",
            "Wireless Operation",
            "Kompressor Technology"
        ],
        monthlyPrice: "65",
        originalPrice: "130",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "vacuum-cordzero-standard",
        name: "CordZero All-in-One Vacuum",
        model: "A9T-RMAX",
        category: "home",
        emoji: "🧹",
        features: [
            "CordZero All-in-One",
            "Standard Design", 
            "5 Tahun Self-Service",
            "Wireless Stick Vacuum",
            "Dual Batteries"
        ],
        monthlyPrice: "45",
        originalPrice: "90",
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "styler-steam-wardrobe",
        name: "Steam Wardrobe LG Styler",
        model: "S3WF",
        category: "home",
        emoji: "👔",
        features: [
            "Steam Wardrobe",
            "Garment Care", 
            "7 Tahun Self-Service",
            "Sanitizing Steam",
            "Wrinkle Care"
        ],
        plans: [
            {
                duration: "7 Tahun",
                type: "Self-Service",
                monthlyPrice: "45",
                originalPrice: "90"
            },
            {
                duration: "5 Tahun",
                type: "Self-Service",
                monthlyPrice: "55",
                originalPrice: "110" 
            }
        ],
        promo: "Diskann 50% untuk 9 bulan pertama"
    },
    {
        id: "soundbar-570w",
        name: "570W 5.1.3ch Sound Bar",
        model: "SL10RG",
        category: "home",
        emoji: "🔊",
        features: [
            "570W Total Power",
            "5.1.3 Channel", 
            "High Resolution Audio",
            "5 Tahun Self-Service",
            "Dolby Atmos"
        ],
        monthlyPrice: "30",
        originalPrice: "60",
        promo: "Diskann 50% untuk 9 bulan pertama"
    }
];

console.log(`✅ LG Subscribe Products Database Loaded: ${productsData.length} products`);