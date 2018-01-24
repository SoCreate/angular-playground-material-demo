import { ButtonComponent } from './button.component';
import { sandboxOf } from 'angular-playground';
import { MaterialModule } from '../material/material.module';

export default sandboxOf(ButtonComponent, {
    imports: [ MaterialModule ]
})
    .add('Basic Buttons', {
        template: `
        <div class="button-row">
            <button mat-button>Basic</button>
            <button mat-button color="primary">Primary</button>
            <button mat-button color="accent">Accent</button>
            <button mat-button color="warn">Warn</button>
            <button mat-button disabled>Disabled</button>
            <a mat-button routerLink=".">Link</a>
        </div>
        `
    })
    .add('Raised Buttons', {
        template: `
        <div class="button-row">
            <button mat-raised-button>Basic</button>
            <button mat-raised-button color="primary">Primary</button>
            <button mat-raised-button color="accent">Accent</button>
            <button mat-raised-button color="warn">Warn</button>
            <button mat-raised-button disabled>Disabled</button>
            <a mat-raised-button routerLink=".">Link</a>
        </div>
        `
    })
    .add('Fab Buttons', {
        template: `
        <div class="button-row">
        <button mat-fab>Basic</button>
            <button mat-fab color="primary">Primary</button>
            <button mat-fab color="accent">Accent</button>
            <button mat-fab color="warn">Warn</button>
            <button mat-fab disabled>Disabled</button>
            <button mat-fab>
                <mat-icon class="md-24" aria-label="Example icon-button with a heart icon">favorite</mat-icon>
            </button>
            <a mat-fab routerLink=".">Link</a>
        </div>
        `
    })
    .add('Mini Fab Buttons', {
        template: `
        <div class="button-row">
            <button mat-mini-fab>Basic</button>
            <button mat-mini-fab color="primary">Primary</button>
            <button mat-mini-fab color="accent">Accent</button>
            <button mat-mini-fab color="warn">Warn</button>
            <button mat-mini-fab disabled>Disabled</button>
            <button mat-mini-fab>
                <mat-icon class="md-24" aria-label="Example icon-button with a heart icon">favorite</mat-icon>
            </button>
            <a mat-mini-fab routerLink=".">Link</a>
        </div>
        `
    });
