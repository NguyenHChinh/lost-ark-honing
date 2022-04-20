function increaseMaterials(tier, level, type) {
    // SOURCE OF ALL INFORMATION BELOW: https://lost-ark.maxroll.gg/resources/gear-honing-system

    // DETERMINE THE TYPE (EITHER WEAPON OR ARMOR)
    switch (type) {
        // ARMOR
        case 'armor':
            switch (tier) {
                // TIER 1
                case 'tier1':
                    switch (level) {
                        case 0:
                        case 1:
                        case 2:
                            guardian_stone += 90;
                            shard += 90;
                            leapstone += 2;
                            return;
                        case 3:
                        case 4:
                        case 5:
                            guardian_stone += 135;
                            shard += 180;
                            leapstone += 3;
                            return;
                        case 6:
                        case 7:
                            guardian_stone += 210;
                            shard += 240;
                            leapstone += 4;
                            return;
                        case 8:
                        case 9:
                            guardian_stone += 285;
                            shard += 420;
                            leapstone += 6; 
                            return;
                        case 10:
                            guardian_stone += 360;
                            shard += 600;
                            leapstone += 8;
                            return;
                        case 11:
                            guardian_stone += 360;
                            shard += 600;
                            leapstone += 8;
                            gold += 5;
                            return;
                        case 12:
                            guardian_stone += 450;
                            shard += 780;
                            leapstone += 9;
                            gold += 5;
                            return;
                        case 13:
                            guardian_stone += 510;
                            shard += 960;
                            leapstone += 9;
                            gold += 5;
                            return;
                        case 14:
                            guardian_stone += 600;
                            shard += 1200;
                            leapstone += 13;
                            gold += 5;
                            return;
                        case 15:
                            guardian_stone += 900;
                            shard += 2160;
                            leapstone += 18;
                            gold += 7;
                            return;
                        case 16:
                            guardian_stone += 1260;
                            shard += 3600;
                            leapstone += 26;
                            gold += 7;
                            return;
                        case 17:
                            guardian_stone += 1800;
                            shard += 5400;
                            leapstone += 34;
                            gold += 10;
                            return;
                        case 18:
                            guardian_stone += 2400;
                            shard += 7200;
                            leapstone += 44;
                            gold +=  10;
                            return;
                        case 19:
                            guardian_stone += 3000;
                            shard += 9600;
                            leapstone += 54;
                            gold += 15;
                            return;
                    }
                // TIER 2
                case 'tier2':
                    switch (level) {
                        case 0:
                        case 1:
                        case 2:
                            guardian_stone += 135;
                            shard += 120;
                            leapstone += 3;
                            return;
                        case 3:
                        case 4:
                        case 5:
                            guardian_stone += 202;
                            shard += 240;
                            leapstone += 6;
                            return;
                        case 6:
                        case 7:
                            guardian_stone += 315;
                            shard += 360;
                            leapstone += 8;
                            fusion_material += 1;
                            gold += 5;
                            return;
                        case 8:
                        case 9:
                            guardian_stone += 427;
                            shard += 600;
                            leapstone += 11;
                            fusion_material += 2;
                            gold += 5;
                            return;
                        case 10:
                        case 11:
                            guardian_stone += 540;
                            shard += 900;
                            leapstone += 15;
                            fusion_material += 3;
                            gold += 7;
                            return;
                        case 12:
                            guardian_stone += 675;
                            shard += 1200;
                            leapstone += 20;
                            fusion_material += 5;
                            gold += 10;
                            return;
                        case 13:
                            guardian_stone += 765;
                            shard += 1500;
                            leapstone += 23;
                            fusion_material += 5;
                            gold += 10;
                            return;
                        case 14:
                            guardian_stone += 900;
                            shard += 2040;
                            leapstone += 27;
                            fusion_material += 7;
                            gold += 12;
                            return;
                        case 15:
                            guardian_stone += 1350;
                            shard += 3240;
                            leapstone += 35;
                            fusion_material += 10; 
                            gold += 15;
                            return;
                        case 16:
                            guardian_stone += 1890;
                            shard += 5400;
                            leapstone += 48;
                            fusion_material += 12; 
                            gold += 15;
                            return;
                        case 17:
                            guardian_stone += 2700;
                            shard += 8100;
                            leapstone += 68;
                            fusion_material += 15;
                            gold += 20;
                            return;
                        case 18:
                            guardian_stone += 3600;
                            shard += 10800;
                            leapstone += 81;
                            fusion_material += 20;
                            gold += 20;
                            return;
                        case 19:
                            guardian_stone += 4500;
                            shard += 14400;
                            leapstone += 94;
                            fusion_material += 25;
                            gold += 25;
                            return;
                    }
                // TIER 3 LOW
                case 'tier3L':
                    switch (level) {
                        case 0:
                            guardian_stone += 82;
                            shard += 22;
                            leapstone += 2;
                            silver += 11100;
                            return;
                        case 1:
                            guardian_stone += 82;
                            shard += 22;
                            leapstone += 2;
                            silver += 11380;
                            return;
                        case 2:
                            guardian_stone += 82;
                            shard += 22;
                            leapstone += 2;
                            silver += 11660;
                            return;
                        case 3:
                            guardian_stone += 120;
                            shard += 32;
                            leapstone += 4;
                            fusion_material += 2;
                            silver += 12240;
                            return;
                        case 4:
                            guardian_stone += 120;
                            shard += 32;
                            leapstone += 4; 
                            fusion_material += 2;
                            silver += 12240;
                            return;
                        case 5:
                            guardian_stone += 120;
                            shard += 32;
                            leapstone += 4;
                            fusion_material += 2;
                            silver += 12540;
                            return;
                        case 6:
                            guardian_stone += 156;
                            shard += 42;
                            leapstone += 4;
                            fusion_material += 2;
                            silver += 12840;
                            gold += 70;
                            return;
                        case 7:
                            guardian_stone += 156;
                            shard += 42;
                            leapstone += 4;
                            fusion_material += 2;
                            silver += 13160;
                            gold += 70;
                            return;
                        case 8:
                            guardian_stone += 156;
                            shard += 42;
                            leapstone += 4;
                            fusion_material += 2;
                            silver += 13480;
                            gold += 70;
                            return;
                        case 9:
                            guardian_stone += 192;
                            shard += 50;
                            leapstone += 6;
                            fusion_material += 4;
                            silver += 13820;
                            gold += 70;
                            return;
                        case 10:
                            guardian_stone += 192;
                            shard += 50;
                            leapstone += 6;
                            fusion_material += 4;
                            silver += 14140;
                            gold += 70;
                            return;
                        case 11:
                            guardian_stone += 192;
                            shard += 50;
                            leapstone += 6;
                            fusion_material += 4;
                            silver += 14500;
                            gold += 70;
                            return;
                        case 12:
                            guardian_stone += 228;
                            shard += 60;
                            leapstone += 6; 
                            fusion_material += 4;
                            silver += 14860;
                            gold += 70;
                            return;
                        case 13:
                            guardian_stone += 228;
                            shard += 60;
                            leapstone += 8;
                            fusion_material += 4;
                            silver += 15520;
                            gold += 70;
                            return;
                        case 14:
                            guardian_stone += 228;
                            shard += 60;
                            leapstone += 8;
                            fusion_material += 4;
                            silver += 15600;
                            gold += 70;
                            return;
                    }
                // TIER 3 MEDIUM
                case 'tier3M':
                    switch (level) {
                        case 0:
                            guardian_stone += 216;
                            shard += 58;
                            leapstone += 4; 
                            fusion_material += 4;
                            silver += 19320;
                            gold += 160;
                            return;
                        case 1:
                            guardian_stone += 216;
                            shard += 58;
                            leapstone += 6;
                            fusion_material += 4;
                            silver += 19800;
                            gold += 160;
                            return;
                        case 2:
                            guardian_stone += 216;
                            shard += 58;
                            leapstone += 6;
                            fusion_material += 4;
                            silver += 20300;
                            gold += 170;
                            return;
                        case 3:
                            guardian_stone += 310;
                            shard += 82;
                            leapstone += 6
                            fusion_material += 4;
                            silver += 20800;
                            gold += 170;
                            return;
                        case 4:
                            guardian_stone += 310;
                            shard += 82;
                            leapstone += 6;
                            fusion_material += 4;
                            silver += 21300;
                            gold += 170;
                            return;
                        case 5:
                            guardian_stone += 310;
                            shard += 82;
                            leapstone += 8; 
                            fusion_material += 4;
                            silver += 21820;
                            gold += 170;
                            return;
                        case 6:
                            guardian_stone += 404;
                            shard += 108;
                            leapstone += 8;
                            fusion_material += 6;
                            silver += 22380;
                            gold += 170;
                            return;
                        case 7:
                            guardian_stone += 404;
                            shard += 108;
                            leapstone += 10;
                            fusion_material += 6;
                            silver += 22920;
                            gold += 170;
                            return;
                        case 8:
                            guardian_stone += 404;
                            shard += 108;
                            leapstone += 10;
                            fusion_material += 6;
                            silver += 23480;
                            gold += 170;
                            return;
                        case 9:
                            guardian_stone += 498;
                            shard += 132;
                            leapstone += 10;
                            fusion_material += 8;
                            silver += 24040;
                            gold += 170;
                            return;
                        case 10:
                            guardian_stone += 498;
                            shard += 132;
                            leapstone += 10;
                            fusion_material += 8;
                            silver += 24640;
                            gold += 170;
                            return;
                        case 11:
                            guardian_stone += 498;
                            shard += 132;
                            leapstone += 12;
                            fusion_material += 8;
                            silver += 25240;
                            gold += 170;
                            return;
                        case 12:
                            guardian_stone += 592;
                            shard += 158;
                            leapstone += 12;
                            fusion_material += 8;
                            silver += 25860;
                            gold += 170;
                            return;
                        case 13:
                            guardian_stone += 592;
                            shard += 158;
                            leapstone += 12;
                            fusion_material += 8;
                            silver += 26500;
                            gold += 170;
                            return;
                        case 14:
                            guardian_stone += 592;
                            shard += 158;
                            leapstone += 12;
                            fusion_material += 8;
                            silver += 27160;
                            gold += 180;
                            return;
                        case 15:
                            guardian_stone += 686;
                            shard += 216;
                            leapstone += 14;
                            fusion_material += 10;
                            silver += 27820;
                            gold += 210;
                            return;
                        case 16:
                            guardian_stone += 686;
                            shard += 292;
                            leapstone += 16;
                            fusion_material += 10;
                            silver += 28420;
                            gold += 250;
                            return;
                        case 17:
                            guardian_stone += 686;
                            shard += 396;
                            leapstone += 16;
                            fusion_material += 12;
                            silver += 29040;
                            gold += 280;
                            return;
                        case 18:
                            guardian_stone += 780;
                            shard += 536;
                            leapstone += 18;
                            fusion_material += 14;
                            silver += 29660;
                            gold += 320;
                            return;
                        case 19:
                            guardian_stone += 780; 
                            shard += 728;
                            leapstone += 20;
                            fusion_material += 14;
                            silver +=30320;
                            gold += 350;
                            return;
                    }
            }

        // WEAPON
        case 'weapon':
            switch (tier) {
                // TIER 1
                case 'tier1':
                    switch (level) {
                        case 0:
                        case 1:
                        case 2:
                            destruction_stone += 150;
                            shard += 150;
                            leapstone += 2;
                            return;
                        case 3:
                        case 4:
                        case 5:
                            destruction_stone += 225;
                            shard += 300;
                            leapstone += 4;
                            return;
                        case 6:
                        case 7:
                            destruction_stone += 350;
                            shard += 400;
                            leapstone += 6;
                            return;
                        case 8:
                        case 9:
                            destruction_stone += 475;
                            shard += 700;
                            leapstone += 9;
                            return;
                        case 10:
                            destruction_stone += 600;
                            shard += 1000;
                            leapstone += 12;
                            return;
                        case 11:
                            destruction_stone += 600;
                            shard += 1000;
                            leapstone += 12;
                            gold += 10;
                            return;
                        case 12:
                            destruction_stone += 750;
                            shard += 1300;
                            leapstone += 15;
                            gold += 10;
                            return;
                        case 13:
                            destruction_stone += 850;
                            shard += 1600;
                            leapstone += 15;
                            gold += 10;
                            return;
                        case 14:
                            destruction_stone += 1000;
                            shard += 2000;
                            leapstone += 21;
                            gold += 10;
                            return;
                        case 15:
                            destruction_stone += 1500;
                            shard += 3600;
                            leapstone += 30;
                            gold += 15;
                            return;
                        case 16:
                            destruction_stone += 2100;
                            shard += 6000;
                            leapstone += 42;
                            gold += 15;
                            return;
                        case 17:
                            destruction_stone += 3000;
                            shard += 9000;
                            leapstone += 56;
                            gold += 20;
                            return;
                        case 18:
                            destruction_stone += 4000;
                            shard += 9000;
                            leapstone += 72;
                            gold += 20;
                            return;
                        case 19:
                            destruction_stone += 5000;
                            shard += 16000;
                            leapstone += 90;
                            gold += 30;
                            return;
                    }
                // TIER 2
                case 'tier2':
                    switch (level) {
                        case 0:
                        case 1:
                        case 2:
                            destruction_stone += 225;
                            shard += 200;
                            leapstone += 5;
                            return;
                        case 3:
                        case 4:
                        case 5:
                            destruction_stone += 338;
                            shard += 400;
                            leapstone += 9;
                            return;
                        case 6:
                        case 7:
                            destruction_stone += 525;
                            shard += 600;
                            leapstone += 13;
                            fusion_material += 2;
                            gold += 10;
                            return;
                        case 8:
                        case 9:
                            destruction_stone += 713;
                            shard += 1000;
                            leapstone += 18;
                            fusion_material += 3;
                            gold += 10;
                            return;
                        case 10:
                        case 11:
                            destruction_stone += 900;
                            shard += 1500;
                            leapstone += 25;
                            fusion_material += 5;
                            gold += 15;
                            return;
                        case 12:
                            destruction_stone += 1125;
                            shard += 2000;
                            leapstone += 32;
                            fusion_material += 7; 
                            gold += 20;
                            return;
                        case 13:
                            destruction_stone += 1275; 
                            shard += 2500;
                            leapstone += 38;
                            fusion_material += 7;
                            gold += 20;
                            return;
                        case 14:
                            destruction_stone += 1500; 
                            shard += 3400;
                            leapstone += 45;
                            fusion_material += 10; 
                            gold += 25;
                            return;
                        case 15:
                            destruction_stone += 2250; 
                            shard += 5400;
                            leapstone += 57;
                            fusion_material += 15; 
                            gold += 30;
                            return;
                        case 16:
                            destruction_stone += 3150; 
                            shard += 9000;
                            leapstone += 80;
                            fusion_material += 20; 
                            gold += 30;
                            return;
                        case 17:
                            destruction_stone += 4500; 
                            shard += 13500;
                            leapstone += 112;
                            fusion_material += 25;
                            gold += 40
                            return;
                        case 18:
                            destruction_stone += 6000; 
                            shard += 18000;
                            leapstone += 135;
                            fusion_material += 30;
                            gold += 40;
                            return;
                        case 19:
                            destruction_stone += 7500;
                            shard += 13500;
                            leapstone += 156;
                            fusion_material += 35;
                            gold += 50;
                            return;
                    }
                // TIER 3 LOW
                case 'tier3L':
                    switch (level) {
                        case 0:
                            destruction_stone += 138;
                            shard += 32;
                            leapstone += 4;
                            silver += 15860;
                            return;
                        case 1:
                            destruction_stone += 138; 
                            shard += 32;
                            leapstone += 4;
                            silver += 16240;
                            return;
                        case 2:
                            destruction_stone += 198; 
                            shard += 32;
                            leapstone += 6; 
                            silver += 16640;
                            return;
                        case 3:
                            destruction_stone += 198; 
                            shard += 46;
                            leapstone += 6;
                            fusion_material += 2;
                            silver += 17040;
                            return;
                        case 4:
                            destruction_stone += 198;
                            shard += 46;
                            leapstone += 6;
                            fusion_material += 2;
                            silver += 17460;
                            return;
                        case 5:
                            destruction_stone += 198; 
                            shard += 46;
                            leapstone += 6;
                            fusion_material += 2; 
                            silver += 17900;
                            return;
                        case 6:
                            destruction_stone += 258;
                            shard += 60;
                            leapstone += 8; 
                            fusion_material += 4; 
                            silver += 18320;
                            gold += 120;
                            return;
                        case 7:
                            destruction_stone += 258;
                            shard += 60;
                            leapstone += 8; 
                            fusion_material += 4; 
                            silver += 18780;
                            gold += 120;
                            return;
                        case 8:
                            destruction_stone += 258;
                            shard += 60;
                            leapstone += 8; 
                            fusion_material += 4; 
                            silver += 19240;
                            gold += 120;
                            return;
                        case 9:
                            destruction_stone += 320;
                            shard += 74;
                            leapstone += 10; 
                            fusion_material += 4; 
                            silver += 19720;
                            gold += 120;
                            return;
                        case 10:
                            destruction_stone += 320;
                            shard += 74;
                            leapstone += 10;
                            fusion_material += 4; 
                            silver += 20200;
                            gold += 120;
                            return;
                        case 11:
                            destruction_stone += 320;
                            shard += 74;
                            leapstone += 10; 
                            fusion_material += 4; 
                            silver += 20700;
                            gold += 120;
                            return;
                        case 12:
                            destruction_stone += 380;
                            shard += 88;
                            leapstone += 10; 
                            fusion_material += 6; 
                            silver += 21200;
                            gold += 120;
                            return;
                        case 13:
                            destruction_stone += 380;
                            shard += 88;
                            leapstone += 12; 
                            fusion_material += 6; 
                            silver += 21700;
                            gold += 120;
                            return;
                        case 14:
                            destruction_stone += 380;
                            shard += 88;
                            leapstone += 12; 
                            fusion_material += 6; 
                            silver += 22260;
                            gold += 120;
                            return;
                    }
                case 'tier3M':
                    // TIER 3 MEDIUM
                    switch (level) {
                        case 0:
                            destruction_stone += 358;
                            shard += 84;
                            leapstone += 6; 
                            fusion_material += 4; 
                            silver += 27600;
                            gold += 300;
                            return;
                        case 1:
                            destruction_stone += 358;
                            shard += 84;
                            leapstone += 8; 
                            fusion_material += 4; 
                            silver += 28280;
                            gold += 300;
                            return;
                        case 2:
                            destruction_stone += 358;
                            shard += 84;
                            leapstone += 8; 
                            fusion_material += 4; 
                            silver += 28980;
                            gold += 300;
                            return;
                        case 3:
                            destruction_stone += 516;
                            shard += 120;
                            leapstone += 10;
                            fusion_material += 6;
                            silver += 29680;
                            gold += 300;
                            return;
                        case 4:
                            destruction_stone += 516;
                            shard += 120;
                            leapstone += 10;
                            fusion_material += 6;
                            silver += 30420;
                            gold += 300;
                            return;
                        case 5:
                            destruction_stone += 516;
                            shard += 120;
                            leapstone += 12;
                            fusion_material += 6; 
                            silver += 31160;
                            gold += 320;
                            return;
                        case 6:
                            destruction_stone += 672;
                            shard += 156;
                            leapstone += 12;
                            fusion_material += 6;
                            silver += 31920
                            gold += 320;
                            return;
                        case 7:
                            destruction_stone += 672; 
                            shard += 156;
                            leapstone += 14;
                            fusion_material += 6; 
                            silver += 32700;
                            gold += 320;
                            return;
                        case 8:
                            destruction_stone += 672;
                            shard += 156;
                            leapstone += 14;
                            fusion_material += 8;
                            silver += 33520;
                            gold += 320;
                            return;
                        case 9:
                            destruction_stone += 830;
                            shard += 192;
                            leapstone += 16;
                            fusion_material += 8;
                            silver += 34340;
                            gold += 320;
                            return;
                        case 10:
                            destruction_stone += 830;
                            shard += 192;
                            leapstone += 16;
                            fusion_material += 8; 
                            silver += 35180;
                            gold += 330;
                            return;
                        case 11:
                            destruction_stone += 830;
                            shard += 192;
                            leapstone += 18;
                            fusion_material += 8;
                            silver += 36040;
                            gold += 330;
                            return;
                        case 12:
                            destruction_stone += 968;
                            shard += 228;
                            leapstone += 18;
                            fusion_material += 10;
                            silver += 36940;
                            gold += 330;
                            return;
                        case 13:
                            destruction_stone += 968;
                            shard += 228;
                            leapstone += 20;
                            fusion_material += 10; 
                            silver += 37840;
                            gold += 330;
                            return;
                        case 14:
                            destruction_stone += 968; 
                            shard += 228;
                            leapstone += 20;
                            fusion_material += 10;
                            silver += 38760;
                            gold += 330;
                            return;
                        case 15:
                            destruction_stone += 1144;
                            shard += 310;
                            leapstone += 22;
                            fusion_material += 12;
                            silver += 39720;
                            gold += 410;
                            return;
                        case 16:
                            destruction_stone += 1144;
                            shard += 422;
                            leapstone += 24;
                            fusion_material += 14;
                            silver += 40580;
                            gold += 480;
                            return;
                        case 17:
                            destruction_stone += 1144;
                            shard += 572;
                            leapstone += 28;
                            fusion_material += 16;
                            silver += 41460;
                            gold += 540;
                            return;
                        case 18:
                            destruction_stone += 1300;
                            shard += 776;
                            leapstone += 30;
                            fusion_material += 18;
                            silver += 42360;
                            gold += 640;
                            return;
                        case 19:
                            destruction_stone += 1300;
                            shard += 1054;
                            leapstone += 32;
                            fusion_material += 20;
                            silver += 43260;
                            gold += 730;
                            return;
                    }
            }
    }
}