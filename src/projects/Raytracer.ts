import Project from '../interfaces/project.interface';

export const Raytracer: Project = {

    getLinkName(): string { return "raytracer" },
    getTechnologies(): string[] { return ["cpp"] },
    getCardIcon(): string { return "fas fa-crosshairs" },
    getCardImg(): string { return "" },
    getTitle(): string { return "Raytracer" },
    getCardDescription(): string { return "A process which produces images based on a supplied description file." },
    hasDescription(): boolean { return true },
    getDescription(): string { return "Missing Project Description" },
    getYear(): number { return 2014 },
    hasView(): boolean { return true },
    hasDemo(): boolean { return false },

}