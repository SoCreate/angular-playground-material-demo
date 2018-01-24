import { sandboxOf } from 'angular-playground';
import { AutocompleteComponent } from './autocomplete.component';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';

const states = [
    {
        name: 'Arkansas',
        population: '2.978M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
        name: 'California',
        population: '39.14M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
        name: 'Florida',
        population: '20.27M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
        name: 'Texas',
        population: '27.47M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
];

function filterStates(name: string) {
    return states
        .filter(state => state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
}

const stateCtrl = new FormControl();
const filteredStates = stateCtrl.valueChanges
    .startWith(null)
    .map(state => state ? filterStates(state) : states.slice());


export default sandboxOf(AutocompleteComponent, {
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
    .add('Autocomplete overview', {
        template: `
        <form [formGroup]="form" class="example-form">
            <mat-form-field class="example-full-width">
                <input matInput placeholder="State" aria-label="State" [matAutocomplete]="auto" [formControl]="stateCtrl">
                <mat-autocomplete #auto="matAutocomplete">
                <mat-option *ngFor="let state of filteredStates | async" [value]="state.name">
                    <img style="vertical-align:middle;" aria-hidden src="{{state.flag}}" height="25" />
                    <span>{{ state.name }}</span> |
                    <small>Population: {{state.population}}</small>
                </mat-option>
                </mat-autocomplete>
            </mat-form-field>

            <br />

            <mat-slide-toggle
                [checked]="stateCtrl.disabled"
                (change)="stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()">
                Disable Input?
            </mat-slide-toggle>
        </form>
        `,
        context: {
            form: new FormGroup({}),
            stateCtrl,
            filteredStates
        }
    });
