function chance(tier, level) {
    switch (tier) {
        case 'tier1':
            switch (level) {
                // REMEMBER, THE CASE VALUE IS WHERE THE CURRENT LEVEL VALUE IS
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    return 100;
                    break;
                case 6:
                case 7:
                    return 90;
                    break;
                case 8:
                case 9:
                    return 80;
                    break;
                case 10:
                case 11:
                    return 70;
                    break;
                case 12:
                    return 60;
                    break;
                case 13:
                    return 50;
                    break;
                case 14:
                    return 40;
                    break;
                case 15:
                    return 30;
                    break;
                case 16:
                    return 20;
                    break;
                case 17:
                    return 15;
                    break;
                case 18:
                    return 10;
                    break;
                case 19:
                    return 5;
                    break;
                default:
                    console.log("ERROR IN \"chances.js\": TIER 1 DEFAULT");
                    return 100;
                    break;
            }
            break;
        case 'tier2':
            switch (level) {
                default:
                    console.log("ERROR IN \"chances.js\": TIER 2 DEFAULT");
                    return 100;
                    break;
            }
            break;
        case 'tier3':
            switch (level) {
                default:
                    console.log("ERROR IN \"chances.js\": TIER 3 DEFAULT");
                    return 100;
                    break;
            }
            break;
        default:
            console.log("ERROR IN \"chances.js\": TIER SELECTOR DEFAULT");
            return 100;
            break;
    }
}