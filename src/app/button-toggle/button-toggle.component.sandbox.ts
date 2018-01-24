import { sandboxOf } from 'angular-playground';
import { MaterialModule } from '../material/material.module';
import { ButtonToggleComponent } from './button-toggle.component';

export default sandboxOf(ButtonToggleComponent, {
    imports: [ MaterialModule ]
})
    .add('Exclusive Selection', {
        template: `
        <mat-button-toggle-group #group="matButtonToggleGroup">
        <mat-button-toggle value="left">
            <mat-icon>format_align_left</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="center">
            <mat-icon>format_align_center</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="right">
            <mat-icon>format_align_right</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="justify" disabled>
            <mat-icon>format_align_justify</mat-icon>
        </mat-button-toggle>
        </mat-button-toggle-group>
        <div class="example-selected-value">Selected value: {{group.value}}</div>
        `
    })