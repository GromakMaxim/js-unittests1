import calculateCharacterHealth from '../index';

/*
correct data
*/
test('should return healthy(given health range (50-100))', () => {
    for (let i = 50; i <= 100; i++) {
        let actual = calculateCharacterHealth({ name: 'Маг', health: i });
        let expected = "healthy";
        expect(actual).toBe(expected);
    }
});

test('should return critical(given health range (1-14))', () => {
    for (let i = 0; i < 15; i++) {
        let actual = calculateCharacterHealth({ name: 'Маг', health: i });
        let expected = "critical";
        expect(actual).toBe(expected);
    }
});

test('should return wounded (give health range (15-49))', () => {
    for (let i = 15; i < 49; i++) {
        let actual = calculateCharacterHealth({ name: 'Маг', health: i });
        let expected = "wounded";
        expect(actual).toBe(expected);
    }
});

/*
incorrect data
*/

test('should return error(given health range (-100 -> -1))', () => {
    for (let i = -1; i > -100; i--) {
        expect(() => {
            calculateCharacterHealth({ name: 'Вор', health: i });
        }).toThrow(Error);
    }
});

test('should return error(given health range (101 -> 300))', () => {
    for (let i = 101; i <= 300; i++) {
        expect(() => {
            calculateCharacterHealth({ name: 'Вор', health: i });
        }).toThrow(Error);
    }
});

test('should return error(given wrong name field)', () => {
    let testArray = ['', 123, {},
        [], true, false
    ];
    for (let testcase of testArray) {
        expect(() => {
            calculateCharacterHealth({ name: testcase, health: 25 });
        }).toThrow(Error);
    }
});

test('should return error(given wrong health field)', () => {
    let testArray = ['', '123', [], {}, true, false];
    for (let testcase of testArray) {
        expect(() => {
            calculateCharacterHealth({ name: "Warrior", health: testcase });
        }).toThrow(Error);
    }
});

test('should return error(given wrong fields)', () => {
    let wrongNamesArray = ['', 123, [], {}, true, false];
    let wrongHealthValuesArray = ['', '123', [], {}, true, false];

    for (let testName of wrongNamesArray) {
        for (let testHealth of wrongHealthValuesArray) {
            expect(() => {
                calculateCharacterHealth({ name: testName, health: testHealth });
            }).toThrow(Error);
        }
    }
});

test('should return error(calling with wrong ars)', () => {
    let testArray = ['', '123', [], {}, true, false];
    for (let testcase of testArray) {
        expect(() => {
            calculateCharacterHealth(testcase);
        }).toThrow(Error);
    }
});

test('should return error(given wrong object)', () => {
    expect(() => {
        calculateCharacterHealth({ jaja: "Binks", is: 50 });
    }).toThrow(Error);
});

test('should return error(calling function without args)', () => {
    expect(() => {
        calculateCharacterHealth();
    }).toThrow(Error);
});

test('should return error(calling function with more than 1 arg)', () => {
    expect(() => { calculateCharacterHealth({ name: 'Арамис', health: "" }, true); }).toThrow(Error);
    expect(() => { calculateCharacterHealth(false, { name: 'Арамис', health: "" }); }).toThrow(Error);
    expect(() => { calculateCharacterHealth(false, { name: 'Арамис', health: "" }, true); }).toThrow(Error);
    expect(() => { calculateCharacterHealth("rambo", "false", { name: 'Арамис', health: "" }); }).toThrow(Error);
    expect(() => { calculateCharacterHealth(1, "th", { name: 'Арамис', health: "" }, true); }).toThrow(Error);
    expect(() => { calculateCharacterHealth(1, "th", false, { name: 'Арамис', health: "" }, true); }).toThrow(Error);
});