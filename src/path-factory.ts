export class PathFactory {
    private static readonly fileSuffix = "-result"
    
    static generate(repository: string, filename: string): string {
        return `${repository}/${filename}${this.fileSuffix}.txt`;
    }
    
}
