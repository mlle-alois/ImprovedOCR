export interface Extractor {
    getExtractedContent(input: string): string
    
    doesDataExist(input: string): boolean
}
