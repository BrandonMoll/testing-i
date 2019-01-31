module.exports = {
    success: (item) => {
        let enhancedItem = {}
        let enhancement = item.enhancement;
        if(item.enhancement < 16 ) {
            enhancement += 1;
        };

        return enhancedItem = {
            name: `[+${enhancement}]${item.name}`,
            type: item.type,
            durability: item.durability,
            enhancement: `+${enhancement}`
        }
        
    },

    fail: (item) => {

    },

    repair: (item) => {
        return {...item, durability: 100 }
    }
}