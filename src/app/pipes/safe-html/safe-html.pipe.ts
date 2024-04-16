import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

@Pipe({
    name: 'safeHTML'
})
export class SafeHTMLPipe implements PipeTransform {
    constructor(
        private sanitizer: DomSanitizer
    ) {}

    public transform(value: any) {
        return this.sanitizer.bypassSecurityTrustHtml(value)
    }
}