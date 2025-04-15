export class Point {   //export pour qu elle soit accessible ailleurs
    private abs: number;
    private ord: number;

    constructor(abs: number, ord: number) {
        this.abs = abs;
        this.ord = ord;
    }
    // Getter pour abs
    getAbs(): number {
        return this.abs;
    }

    // Setter pour abs
    setAbs(newAbs: number): void {
        this.abs = newAbs;
    }

    // Getter pour ord
    getOrd(): number {
        return this.ord;
    }

    // Setter pour ord
    setOrd(newOrd: number): void {
        this.ord = newOrd;
    }
    // Méthode calculant la distance entre deux points
    calculerDistance(p: Point): number {
        const dx = this.abs - p.getAbs();
        const dy = this.ord - p.getOrd();
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }
}
