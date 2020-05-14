import { Component, EventEmitter, Output } from '@angular/core'


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed = true;
    
    @Output('navOptionEmit') optionSelected = new EventEmitter<string>()
    
    onSelect(selectedOption: string) {
        this.optionSelected.emit(selectedOption)
    }
}