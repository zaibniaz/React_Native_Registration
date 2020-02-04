export default class Hero {
    heroId: number;
    heroName: string;
    heroPowers: any;

    constructor(data: any) {
        this.heroId = data['id'];
        this.heroName = data['name'];
        this.heroPowers = data['difficulty'];
    }

    clone() {
        return new Hero({ HeroId: this.heroId, HeroName: this.heroName, HeroPowers: this.heroPowers });
    }
}