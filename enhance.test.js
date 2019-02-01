const enhance = require('./enhance');
const items = require('./items')

//act

//assert
// expect(newItem.enhancement).toBe('PEN')
describe('item format', () => {
    test('correct formatting', () => {
        const item = items.sword;
        expect(item.name).toBeTruthy();
        expect(item.type).toBe('weapon' || 'armor');
        expect(item.durability).toBeLessThanOrEqual(100);
        expect.extend({
            durabilityEnhanceRatio (item, durability, enhancement) {
                if(durability < 20 && enhancement < 15) {
                   return {
                       message: 'Durability must be above 20 for items with enhancement less than 15',
                       pass: false
                   };
                } else {
                    return {
                        message: 'success',
                        pass: true
                    }
                }
            }
        });
        expect(item).durabilityEnhanceRatio(item.durability, item.enhancement);
    });    
});

describe('item testing', () => {
    test('sword success test', () => {
        let successSword = enhance.success(items.sword)
        expect(successSword.enhancement).toBe('+1');
        expect(successSword.name).toBe('[+1]longsword')
    })

    test('sword fail test', () => {
        expect(enhancedItem.durability).toBe(75)
        expect(enhancedItem.enhancement).toBe(0)
    });

    test('sword repair test', () => {
        let repairSword = enhance.repair(items.sword)
        expect(repairSword.durability).toBe(100);
    })
})