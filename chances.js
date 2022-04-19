function findChance(tier, level) {
    switch (tier) {
        // TIER 1 CHANCES
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
                case 6:
                case 7:
                    return 90;
                case 8:
                case 9:
                    return 80;
                case 10:
                case 11:
                    return 70;
                case 12:
                    return 60;
                case 13:
                    return 50;
                case 14:
                    return 40;
                case 15:
                    return 30;
                case 16:
                    return 20;
                case 17:
                    return 15;
                case 18:
                    return 10;
                case 19:
                    return 5;
                default:
                    console.log("ERROR IN \"chances.js\": TIER 1 DEFAULT");
                    return 100;
            }

        // TIER 2 CHANCES
        case 'tier2':
            switch (level) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    return 100;
                case 6:
                case 7:
                    return 90;
                case 8:
                case 9:
                    return 80;
                case 10:
                case 11:
                    return 70;
                case 12:
                    return 60;
                case 13:
                    return 50;
                case 14:
                    return 40;
                case 15:
                    return 30;
                case 16:
                    return 20;
                case 17:
                    return 15;
                case 18:
                    return 10;
                case 19:
                    return 5;

                // DEFAULT STATEMENT, THIS SHOULD NEVER OCCUR
                default:
                    console.log("ERROR IN \"chances.js\": TIER 2 DEFAULT");
                    return 100;       
            }

        // TIER 3 LOW CHANCES            
        case 'tier3L':
            switch (level) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    return 100;
                case 6:
                    return 60;
                case 7:
                    return 45;
                case 8:
                case 9:
                case 10:
                    return 30;
                case 11:
                case 12:
                case 13:
                    return 15;
                case 14:
                    return 10;

                // DEFAULT STATEMENT, THIS SHOULD NEVER OCCUR
                default:
                    console.log("ERROR IN \"chances.js\": TIER 3L DEFAULT");
                    return 100;
            }

        // TIER 3 MEDIUM CHANCES
        case 'tier3M':
            switch (level) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    return 100;
                case 6:
                    return 60;
                case 7:
                    return 45;
                case 8:
                case 9:
                case 10:
                    return 30;
                case 11:
                case 12:
                case 13:
                    return 15;
                case 14:
                case 15:
                case 16:
                    return 10;
                case 17:
                case 18:
                    return 5;
                case 19:
                    return 3;

                // DEFAULT STATEMENT, THIS SHOULD NEVER OCCUR
                default:
                    console.log("ERROR IN \"chances.js\": TIER 3L DEFAULT");
                    return 100;
            }  
        
        // DEFAULT STATEMENT, THIS SHOULD NEVER OCCUR
        default:
            console.log("ERROR IN \"chances.js\": TIER SELECTOR DEFAULT");
            return 100;
            
    }
}