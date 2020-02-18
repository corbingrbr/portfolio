import Project from '../interfaces/project.interface';

export const CrystalLattice: Project = {

    getLinkName(): string { return "crystal-lattice" },
    getTechnologies(): string[] { return ["cpp", "opengl"] },
    getCardIcon(): string { return "fas fa-gem" },
    getCardImg(): string { return "/assets/crystal/crystal.png" },
    getTitle(): string { return "Crystal Lattice" },
    getCardDescription(): string { return "Interactive visualization of three crystal lattice structures." },
    hasDescription(): boolean { return true },
    getDescription(): string { return "Missing Project Description" },
    getYear(): number { return 2014 },
    hasView(): boolean { return true },
    hasDemo(): boolean { return false },

}