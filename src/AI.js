var l_choices = [
    [
        [0, -1],
        [1, -1],
        [-1, -1]
    ],
    [
        [0, -1],
        [1, 0],
        [-1, 0]
    ]
];

var r_choices = [
    [
        [0, 1],
        [1, 0],
        [-1, 0]
    ],
    [
        [0, 1],
        [1, 1],
        [-1, 1]
    ]
];

var t_choices = [
    [
        [1, -1],
        [1, 0]
    ],
    [
        [1, 0],
        [1, 1]
    ]
];

var b_choices = [
    [
        [-1, -1],
        [-1, 0]
    ],
    [
        [-1, 0],
        [-1, 1]
    ]
];

var ROW_MINUS_1 = ROW-1, COL_MINUS_1 = COL-1;

var getDistance = function (r, c, dir_choices, activate_blocs, passed, cost) {
    passed[r][c] = true;
    if (r <= 0 || r >= ROW_MINUS_1 || c <= 0 || c >= COL_MINUS_1) {
        return [r, c, cost];
    }

    var odd = (r % 2 == 1) ? 1 : 0;
    var choices = dir_choices[odd];

    var nextr, nextc, result;
    for (var i = 0, l = choices.length; i < l; i++) {
        nextr = r + choices[i][0];
        nextc = c + choices[i][1];

        if (!activate_blocs[nextr][nextc] && !passed[nextr][nextc]) {
            cost ++;
            result = getDistance(nextr, nextc, dir_choices, activate_blocs, passed, cost);
            if (result != -1) {
                result[0] = nextr;
                result[1] = nextc;
                return result;
            }
        }
    }
    return -1;
};