import Project from '../interfaces/project.interface';

export const Ionic : Project = {

    getLinkName(): string { return "ionic" },
    getTechnologies(): string[] { return ["processing", "java"]},
    getCardIcon(): string { return "fas fa-atom"},
    getCardImg(): string { return "/assets/ionic/ionic.png" },
    getTitle(): string { return "Ionic" },
    getCardDescription(): string { return "A interactive simulation to demonstrate the transfer of electrons amongst compatible atoms." },
    hasDescription(): boolean { return true },
    getDescription(): string { return "Missing Project Description" },
    getYear(): number { return 2014 },
    hasView(): boolean { return true },
    hasDemo(): boolean { return true },

}