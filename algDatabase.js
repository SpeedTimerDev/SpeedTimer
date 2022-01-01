var database;

function createDatabase() {
    database = {
        pll: {
            algs: ["x R' U R' D2 R U' R' D2 R2 x'",
                "x R2' D2 R U R' D2 R U' R x'",
                "x' R U' R' D R U R' D' R U R' D R U' R' D' x",
                "R' U R U' R2' F' U' F U R F R' F' R2",
                "R2 U R' U R' U' R U' R2 D U' R' U R D'",
                "R' d' F R2 u R' U R U' R u' R2'",
                "R2 u' R U' R U R' u R2 f R' f'",
                "R U R' U' D R2 U' R U' R' U R' U R2 D'",
                "M2' U' M2' U2' M2' U' M2'",
                "x R2' F R F' R U2' r' U r U2' x'",
                "R U R' F' R U R' U' R' F R2 U' R'",
                "R F U' R' U R U F' R2' F' R U R U' R' F",
                "r' D' F r U' r' F' D r2 U r' U' r' F r F'",
                "R U' R' U' R U R D R' U' R D' R' U2 R'",
                "R' U2 R' D' R U' R' D R U R U' R' U' R",
                "R U R' U' R' F R2 U' R' U' R U R' F'",
                "M2' U M U2' M' U M2'",
                "M2' U' M U2' M' U' M2'",
                "R' U R' U' R D' R' D R' U D' R2 U' R2' D R2",
                "F R' F R2 U' R' U' R U R' F' R U R' U' F'",
                "M2' U2' M U' M2' U' M2' U' M",
            ],
            names: ["Aa", "Ab", "E", "F", "Ga", "Gb", "Gc", "Gd", "H", "Ja", "Jb", "Na", "Nb", "Ra", "Rb", "T", "Ua", "Ub", "V", "Y", "Z"],
            imgs: ["aaperm.jpg", "abperm.jpg", "eperm.jpg", "fperm.jpg", "gaperm.jpg", "gbperm.jpg", "gcperm.jpg", "gdperm.jpg", "hperm.jpg", "japerm.jpg", "jbperm.jpg", "naperm.jpg", "nbperm.jpg", "raperm.jpg", "rbperm.jpg", "tperm.jpg", "uaperm.jpg", "ubperm.jpg", "vperm.jpg", "yperm.jpg", "zperm.jpg"],
            rots: ["zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod"],
        },
        lpll: {
            algs: [
                "R U R' F' R U R' U' R' F R2 U' R'",
                "F R U' R' U' R U R' F' R U R' U' R' F R F'",
                "R U' R U R U R U' R' U' R2",
                "R2 U R U R' U' R' U' R' U R'",
                "M2' U' M2' U2' M2' U' M2'",
                "M' U M2 U M2 U M' U2 M2",
            ],
            names: ["Jb", "Y", "Ua", "Ub", "H", "Z"],
            imgs: ["sideperm.jpg", "cornerperm.jpg", "uaperm.jpg", "ubperm.jpg", "hperm.jpg", "zperm.jpg"],
            rots: ["zerod", "zerod", "zerod", "zerod", "zerod", "zerod"],
        },
        oll: {
            algs: [
                "R U R' U R U' R' U R U2 R'",
                "R' U2' R2 U R2' U R2 U2' R'",
                "R2 D R' U2 R D' R' U2 R'",
                "r U R' U' r' F R F'",
                "F R' F' r U R U' r'",
                "R U2 R' U' R U' R'",
                "R U R' U R U2 R'",
                "R U2' R2' F R F' U2' R' F R F'",
                "R U' R2' D' r U r' D R2 U R'",
                "R' F2 R2 U2' R' F R U2' R2' F2 R",
                "R' F2 R2 U2' R' F' R U2' R2' F2 R",
                "R U R' U R' F R F' U2 R' F R F'",
                "R U2 R2 F R F' U2 M' U R U' r'",
                "S' R U R' S U' R' F R F'",
                "r U R' U' M2 U R U' R' U' M'",
                "l' U2 L U L' U l",
                "r U2 R' U' R U' r'",
                "R U2 R2 F R F' R U2 R'",
                "F R' F' R U R U' R'",
                "R' U' F U R U' R' F' R",
                "S R U R' U' R' F R f'",
                "R' U' F' U F R",
                "F U R U' R' F'",
                "R U R' U' R' F R F'",
                "F R U R' U' F'",
                "R U R' U' R' F R2 U R' U' F'",
                "R U R' U R' F R F' R U2 R'",
                "R' F' U' F2 U R U' R' F' R",
                "R U R' U R U' R' U' R' F R F'",
                "r U R' U R U2 r'",
                "l' U' L U' L' U2 l",
                "r' R2 U R' U R U2 R' U M'",
                "M' R' U' R U' R' U2 R U' R r'",
                "F R' F' R U2 R U' R' U R U2 R'",
                "F R U R' U' R U R' U' F'",
                "r U' r2 U r2 U r2 U' r",
                "r' U r2 U' r2 U' r2 U r'",
                "l' U' L U' L' U L U' L' U2 l",
                "r U R' U R U' R' U R U2 r'",
                "F U R U' R' U R U' R' F'",
                "R' F' U' F U' R U R' U R",
                "R' F U R U' R2' F' R2 U R' U' R",
                "r U r' U R U' R' M' U R U2' r'",
                "F U R U' R2 F' R U R U' R'",
                "R' F R U R' F' R F U' F'",
                "r' U' r R' U' R U r' U r",
                "r U r' R U R' U' r U' r'",
                "r U R' U' r' R U R U' R'",
                "R U R' U' M' U R U' r'",
                "f R f' U' r' U' R U M'",
                "R' U' R' F R F' U R",
                "R U R' F' U' F U R U2 R'",
                "R' F R U R' U' F' U R",
                "R U R' U' R U' R' F' U' F R U R'",
                "r' D' r U' r' D r2 U' r' U r U r'",
                "R U R' U R U2 R' F R U R' U' F'",
                "R' U' R U' R' U2 R F R U R' U' F'",
            ],
            names: ["21", "22", "23", "24", "25", "26", "27", "1", "2", "3", "4", "17", "18", "19", "20", "5", "6", "35", "37", "31", "32", "43", "44", "33", "45", "9", "10", "36", "38", "7", "8", "11", "12", "47", "48", "49", "50", "53", "54", "51", "52", "55", "56", "13", "14", "15", "16", "28", "57", "34", "46", "39", "40", "29", "30", "41", "42"],
            imgs: [
                ["cross", "blue", "none", "blue", "none", "none", "blue", "none", "none", "none", "blue", "blue", "blue", "none", "none", "none", "blue", "none", "none", "blue", "none", "blue"],

                ["filler", "none", "none", "blue", "blue", "none", "blue", "none", "none", "none", "blue", "blue", "blue", "none", "blue", "none", "blue", "none", "none", "none", "none", "blue"],

                ["filler", "blue", "none", "blue", "none", "none", "blue", "none", "none", "none", "blue", "blue", "blue", "none", "none", "blue", "blue", "blue", "none", "none", "none", "none"],

                ["filler", "blue", "none", "none", "none", "none", "blue", "blue", "none", "none", "blue", "blue", "blue", "none", "none", "none", "blue", "blue", "none", "blue", "none", "none"],

                ["filler", "none", "none", "none", "blue", "none", "blue", "blue", "none", "none", "blue", "blue", "blue", "none", "none", "blue", "blue", "none", "none", "none", "none", "blue"],

                ["filler", "none", "none", "none", "blue", "none", "blue", "blue", "none", "none", "blue", "blue", "blue", "none", "none", "none", "blue", "none", "blue", "blue", "none", "none"],

                ["filler", "blue", "none", "none", "none", "none", "blue", "none", "blue", "none", "blue", "blue", "blue", "none", "none", "blue", "blue", "none", "none", "none", "none", "blue"],

                ["dot", "none", "blue", "none", "blue", "none", "none", "none", "blue", "blue", "none", "blue", "none", "blue", "blue", "none", "none", "none", "blue", "none", "blue", "none"],

                ["9", "blue", "blue", "blue", "none", "none", "none", "none", "none", "blue", "none", "blue", "none", "blue", "blue", "none", "none", "none", "blue", "none", "blue", "none"],

                ["10", "blue", "blue", "none", "none", "none", "none", "none", "blue", "blue", "none", "blue", "none", "blue", "none", "none", "none", "blue", "none", "blue", "blue", "none"],

                ["11", "none", "blue", "blue", "blue", "none", "none", "none", "none", "blue", "none", "blue", "none", "blue", "none", "none", "none", "blue", "none", "blue", "blue", "none"],

                ["filler", "none", "blue", "none", "none", "blue", "none", "none", "blue", "blue", "none", "blue", "none", "blue", "none", "none", "none", "blue", "none", "blue", "blue", "none"],

                ["filler", "none", "blue", "none", "none", "blue", "none", "blue", "none", "blue", "none", "blue", "none", "blue", "none", "none", "none", "none", "none", "blue", "blue", "blue"],

                ["444", "none", "blue", "none", "none", "blue", "none", "blue", "none", "blue", "none", "blue", "none", "blue", "blue", "none", "none", "none", "blue", "none", "blue", "none"],

                ["555", "none", "blue", "none", "none", "blue", "none", "blue", "none", "blue", "none", "blue", "none", "blue", "none", "blue", "none", "blue", "none", "none", "blue", "none"],

                ["666", "none", "none", "none", "none", "blue", "blue", "none", "blue", "none", "blue", "blue", "none", "blue", "blue", "none", "none", "none", "none", "none", "blue", "blue"],

                ["h", "none", "none", "none", "blue", "none", "blue", "blue", "none", "blue", "none", "blue", "blue", "none", "none", "none", "none", "none", "blue", "blue", "blue", "none"],

                ["s", "none", "blue", "none", "none", "blue", "none", "none", "blue", "blue", "none", "blue", "blue", "none", "none", "none", "blue", "blue", "none", "blue", "none", "none"],

                ["filler", "none", "none", "none", "none", "blue", "blue", "none", "blue", "none", "blue", "blue", "none", "blue", "none", "none", "none", "blue", "none", "blue", "blue", "none"],

                ["g", "blue", "none", "none", "none", "none", "blue", "blue", "none", "blue", "none", "blue", "blue", "none", "none", "none", "none", "blue", "none", "blue", "blue", "none"],

                ["fildler", "none", "none", "blue", "none", "blue", "blue", "none", "none", "none", "blue", "blue", "none", "blue", "none", "blue", "none", "none", "none", "none", "blue", "blue"],

                ["k", "none", "none", "none", "blue", "none", "blue", "blue", "none", "blue", "none", "blue", "blue", "none", "blue", "none", "none", "blue", "none", "none", "blue", "none"],

                ["44", "none", "none", "none", "none", "blue", "blue", "none", "blue", "none", "blue", "blue", "none", "blue", "none", "blue", "none", "none", "blue", "none", "blue", "none"],

                ["filler", "blue", "blue", "none", "none", "none", "none", "blue", "none", "none", "blue", "blue", "blue", "none", "none", "none", "none", "blue", "none", "blue", "blue", "none"],

                ["69", "none", "blue", "none", "blue", "none", "none", "blue", "none", "none", "blue", "blue", "blue", "none", "blue", "none", "none", "blue", "none", "none", "blue", "none"],

                ["filler", "none", "none", "blue", "blue", "none", "blue", "none", "none", "none", "blue", "blue", "none", "blue", "none", "none", "none", "blue", "none", "blue", "blue", "none"],

                ["68", "blue", "blue", "none", "none", "none", "none", "blue", "none", "none", "blue", "blue", "none", "blue", "blue", "none", "blue", "none", "none", "none", "none", "blue"],

                ["67", "none", "none", "blue", "none", "blue", "blue", "none", "none", "blue", "none", "blue", "blue", "none", "blue", "none", "none", "blue", "none", "none", "blue", "none"],

                ["66", "blue", "none", "none", "none", "none", "blue", "blue", "none", "none", "blue", "blue", "none", "blue", "none", "blue", "none", "none", "blue", "none", "blue", "none"],

                ["65", "blue", "none", "none", "none", "none", "blue", "none", "blue", "none", "blue", "blue", "none", "blue", "none", "blue", "none", "none", "none", "none", "blue", "blue"],

                ["64", "none", "none", "blue", "blue", "none", "blue", "none", "none", "blue", "none", "blue", "blue", "none", "none", "none", "none", "blue", "none", "blue", "blue", "none"],

                ["63", "blue", "none", "none", "none", "none", "blue", "blue", "none", "none", "blue", "blue", "none", "blue", "blue", "none", "none", "none", "none", "none", "blue", "blue"],

                ["62", "none", "none", "blue", "none", "blue", "blue", "none", "none", "blue", "none", "blue", "blue", "none", "none", "none", "none", "none", "blue", "blue", "blue", "none"],

                ["61", "blue", "none", "none", "none", "none", "blue", "none", "blue", "blue", "none", "blue", "blue", "none", "none", "none", "none", "none", "blue", "blue", "blue", "none"],

                ["60", "none", "none", "blue", "blue", "none", "blue", "none", "none", "none", "blue", "blue", "none", "blue", "blue", "none", "none", "none", "none", "none", "blue", "blue"],

                ["59", "none", "none", "blue", "blue", "none", "blue", "none", "none", "blue", "none", "blue", "blue", "none", "blue", "none", "none", "none", "none", "none", "blue", "blue"],

                ["58", "none", "blue", "blue", "blue", "none", "none", "none", "none", "blue", "none", "blue", "blue", "none", "blue", "none", "blue", "none", "none", "none", "none", "blue"],

                ["57", "blue", "none", "blue", "none", "none", "blue", "none", "none", "blue", "none", "blue", "blue", "none", "none", "none", "none", "none", "none", "blue", "blue", "blue"],

                ["56", "blue", "none", "blue", "none", "none", "blue", "none", "none", "blue", "none", "blue", "blue", "none", "none", "none", "none", "none", "none", "blue", "blue", "blue"],

                ["55", "blue", "blue", "none", "none", "none", "none", "none", "blue", "none", "blue", "blue", "blue", "none", "none", "none", "none", "none", "blue", "blue", "blue", "none"],

                ["53", "blue", "none", "none", "none", "none", "blue", "none", "blue", "blue", "none", "blue", "none", "blue", "none", "none", "blue", "none", "blue", "blue", "none", "none"],

                ["52", "blue", "blue", "blue", "none", "none", "none", "none", "none", "none", "blue", "blue", "blue", "none", "none", "none", "none", "none", "none", "blue", "blue", "blue"],

                ["54", "none", "blue", "none", "blue", "none", "none", "none", "blue", "none", "blue", "blue", "blue", "none", "blue", "none", "none", "none", "blue", "none", "blue", "none"],

                ["50", "blue", "blue", "none", "none", "none", "none", "none", "blue", "none", "blue", "blue", "blue", "none", "none", "blue", "none", "none", "none", "none", "blue", "blue"],

                ["49", "none", "blue", "blue", "blue", "none", "none", "none", "none", "none", "blue", "blue", "blue", "none", "none", "none", "none", "blue", "none", "blue", "blue", "none"],

                ["48", "none", "blue", "none", "none", "blue", "none", "none", "blue", "none", "blue", "blue", "blue", "none", "blue", "none", "none", "none", "none", "none", "blue", "blue"],

                ["47", "none", "blue", "none", "none", "blue", "none", "none", "blue", "none", "blue", "blue", "blue", "none", "none", "none", "none", "none", "blue", "blue", "blue", "none"],

                ["51", "none", "none", "none", "none", "blue", "blue", "blue", "none", "none", "blue", "blue", "none", "blue", "none", "blue", "none", "blue", "none", "none", "blue", "none"],

                ["46", "none", "blue", "none", "none", "blue", "none", "blue", "none", "none", "blue", "blue", "blue", "none", "none", "blue", "none", "blue", "none", "none", "blue", "none"],

                ["45", "none", "blue", "none", "blue", "none", "none", "none", "blue", "none", "blue", "blue", "blue", "none", "none", "blue", "none", "blue", "none", "none", "blue", "none"],

                ["44", "none", "none", "none", "none", "blue", "blue", "none", "blue", "blue", "none", "blue", "none", "blue", "none", "blue", "blue", "none", "blue", "none", "none", "none"],

                ["43", "blue", "blue", "none", "none", "none", "none", "blue", "none", "none", "blue", "blue", "blue", "none", "none", "blue", "none", "none", "blue", "none", "blue", "none"],

                ["42", "none", "blue", "blue", "none", "blue", "none", "none", "none", "none", "blue", "blue", "blue", "none", "blue", "none", "none", "blue", "none", "none", "blue", "none"],

                ["41", "blue", "none", "none", "none", "none", "blue", "blue", "none", "none", "blue", "blue", "none", "blue", "none", "none", "none", "blue", "none", "blue", "blue", "none"],

                ["40", "none", "none", "none", "blue", "none", "blue", "none", "blue", "none", "blue", "blue", "none", "blue", "none", "blue", "none", "blue", "none", "none", "blue", "none"],

                ["39", "blue", "none", "blue", "none", "none", "blue", "none", "none", "none", "blue", "blue", "none", "blue", "none", "blue", "none", "blue", "none", "none", "blue", "none"],

                ["DONE", "none", "blue", "none", "none", "blue", "none", "blue", "none", "none", "blue", "blue", "none", "blue", "none", "none", "blue", "none", "none", "blue", "none", "blue"],
            ],
            rots: ["ninetyd", "zerod", "oneeightyd", "zerod", "twoseventyd", "zerod", "zerod", "zerod", "oneeightyd", "ninetyd", "twoseventyd", "oneeightyd", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "oneeightyd", "twoseventyd", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "oneeightyd", "zerod", "twoseventyd", "zerod", "zerod", "zerod", "twoseventyd", "ninetyd", "zerod", "oneeightyd", "zerod", "zerod", "zerod", "zerod", "oneeightyd", "zerod", "zerod", "zerod", "twoseventyd", "zerod", "oneeightyd", "zerod", "zerod", "ninetyd", "zerod", "zerod"],
        },
        loll: {
            algs: [
                "F R U R' U' F'",
                "f R U R' U' f'",
                "F R U R' U' F' f R U R' U' f'",
                "R U R' U R U' R' U R U2 R'",
                "R' U2' R2 U R2' U R2 U2' R'",
                "R2 D R' U2 R D' R' U2 R'",
                "r U R' U' r' F R F'",
                "F R' F' r U R U' r'",
                "R U2 R' U' R U' R'",
                "R U R' U R U2 R'",
            ],
            names: ["Line", "Small L Shape", "Dot", "OLL 21", "OLL 22", "OLL 23", "OLL 24", "OLL 25", "OLL 26", "OLL 27"],
            imgs: [
                ["1", "none", "none", "none", "none", "none", "none", "none", "none", "none", "blue", "blue", "blue", "none", "none", "none", "none", "none", "none", "none", "none", "none"],

                ["2", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "blue", "blue", "none", "none", "none", "blue", "none", "none", "none", "none", "none"],

                ["3", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "blue", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"],

                ["cross", "blue", "none", "blue", "none", "none", "blue", "none", "none", "none", "blue", "blue", "blue", "none", "none", "none", "blue", "none", "none", "blue", "none", "blue"],

                ["filler", "none", "none", "blue", "blue", "none", "blue", "none", "none", "none", "blue", "blue", "blue", "none", "blue", "none", "blue", "none", "none", "none", "none", "blue"],

                ["filler", "blue", "none", "blue", "none", "none", "blue", "none", "none", "none", "blue", "blue", "blue", "none", "none", "blue", "blue", "blue", "none", "none", "none", "none"],

                ["filler", "blue", "none", "none", "none", "none", "blue", "blue", "none", "none", "blue", "blue", "blue", "none", "none", "none", "blue", "blue", "none", "blue", "none", "none"],

                ["filler", "none", "none", "none", "blue", "none", "blue", "blue", "none", "none", "blue", "blue", "blue", "none", "none", "blue", "blue", "none", "none", "none", "none", "blue"],

                ["filler", "none", "none", "none", "blue", "none", "blue", "blue", "none", "none", "blue", "blue", "blue", "none", "none", "none", "blue", "none", "blue", "blue", "none", "none"],

                ["filler", "blue", "none", "none", "none", "none", "blue", "none", "blue", "none", "blue", "blue", "blue", "none", "none", "blue", "blue", "none", "none", "none", "none", "blue"],
            ],
            rots: ["zerod", "zerod", "zerod", "zerod", "ninetyd", "zerod", "oneeightyd", "zerod", "twoseventyd", "zerod"],
        },
        coll: {
            algs: ["R U R' U R U' R' U R U2 R'", "F' U' L' U L U' f R' U' R U R S'", "R U R' U R U L' U R' U' L", "F R U R' U' R U R' U' R U R' U' F'",
            "f R' U R' U' R D' R U l' S' R'", "R' U2 R' D' R U2 R' D R2", "R U2 R D R' U2 R D' R2", "F R' F' r U R U' r'", "F' r U R' U' r' F R", "R' U2 L U' R U R' L' U2 R",
            "R' U' R U' R' U2 R", "R' F R F' U' F R' F' R F' L' U' L F ", "F U R' U' R F' U' R' U2 R", "R U2 R' U2 L' U R U' L R'", "L' U R U' L U R'", "R U2 r' F R' F' r U' R U' R'",
            "R U R' U R U2 R'", "L' U2 L U2 R U' L' U L R'", "f' L' U L U' f U R U2 R'", "R' U' R S U' R' U R f R' f' U F R f'", "R U' L' U R' U' L", "R U R' U L' U R U' L U2 R'",
            "R' U' R U' R' U2 R2 U R' U R U2 R'", "R U' R' U R U' f' U' F U' F' U' f R2", "R2 D R' U2 R D' R' U2 R'", "F' U R' D R U2 R' D' R U F", "R2 D' R U2 R' D R U2 R", "F R S U S' R' S U' f'",
            "R U' R2 F R F' R U' f R' f' U' R'", "R' U R U2' r' R' F R F' r", "R' F' r U R U' r' F", "R U' F' U B2 U' F U B2 R'", "r U R' U' r' F R F'", "R' U R2 D r' U2 r D' R2 U' R",
            "F U R U' R' S U R U' R' f'", "R' F2 R U2 R U2 R' F2 U' R U' R'", "F' r U r' U' r' F r F R U R' U' F'", "R U R' U' R' F R2 U R' U' R U R' U' F'", "R U R' U F' R U2' R' U2 R' F R", "S' R U R' S U R U' B U' B' R'",
        ],
            names: ["H1", "H2", "H3", "H4", 
            "L1", "L2", "L3", "L4", "L5", "L6",
            "AS1", "AS2", "AS3", "AS4", "AS5", "AS6",
            "S1", "S2", "S3", "S4", "S5", "S6",
            "U1", "U2", "U3", "U4", "U5", "U6",
            "T1", "T2", "T3", "T4", "T5", "T6",
            "Pi1", "Pi2", "Pi3", "Pi4", "Pi5", "Pi6",
            ],
            rots: ["zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod"],
        }
    };
}

var version;

function algData() {
    if (localStorage.getItem("algDatabase") == null) {
        createDatabase();


        version = "0.0.5";
        localStorage.setItem("algVersion", version);

        localStorage.setItem("algDatabase", JSON.stringify(database));
    } else {
        database = JSON.parse(localStorage.algDatabase);

        if (version != "0.0.5") {
            createDatabase();
            version = "0.0.5";
            localStorage.setItem("algVersion", version);
        }
    }

    createDatabase();

    return database;
}

function restoreDefault() {
    createDatabase();

    localStorage.setItem("algDatabase", JSON.stringify(database));
};

var script = document.createElement('script');
script.src = "algorithms.js";
script.async = true;
document.body.appendChild(script);