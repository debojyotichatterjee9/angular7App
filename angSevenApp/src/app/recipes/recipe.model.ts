// this is a model which is a blueprint of the object we create
// we define here how a recipe should look like in this class
export class Recipe {
    public name: string;
    public description: string;
    public imageUrl: string;

    constructor(name: string, description: string, imageUrl: string) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}