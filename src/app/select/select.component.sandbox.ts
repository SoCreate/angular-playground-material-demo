import { sandboxOf } from 'angular-playground';
import { SelectComponent } from './select.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormControl, Validators, FormsModule } from '@angular/forms';

export default sandboxOf(SelectComponent, {
    imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
    .add('Basic Select', {
        template: `
        <mat-form-field>
            <mat-select placeholder="Favorite food">
                <mat-option *ngFor="let food of foods" [value]="food.value">
                    {{ food.viewValue }}
                </mat-option>
            </mat-select>
        </mat-form-field>
        `,
        context: {
            foods: [
                { value: 'steak-0', viewValue: 'Steak' },
                { value: 'pizza-1', viewValue: 'Pizza' },
                { value: 'tacos-2', viewValue: 'Tacos' }
            ]
        }
    })
    .add('Select with 2-way value binding', {
        template: `
        <mat-form-field>
            <mat-select [(value)]="selected">
                <mat-option>None</mat-option>
                <mat-option value="option1">Option 1</mat-option>
                <mat-option value="option2">Option 2</mat-option>
                <mat-option value="option3">Option 3</mat-option>
            </mat-select>
        </mat-form-field>

        <p>You selected: {{selected}}</p>
        `,
        context: {
            selected: 'option2'
        }
    })
    .add('Select in a form', {
        template: `
        <form>
            <mat-form-field>
                <mat-select placeholder="Favorite food" [(ngModel)]="selectedValue" name="food">
                    <mat-option *ngFor="let food of foods" [value]="food.value">
                    {{food.viewValue}}
                    </mat-option>
                </mat-select>
            </mat-form-field>

            <p> Selected value: {{selectedValue}} </p>
        </form>
        `,
        context: {
            selectedValue: '',
            foods: [
                { value: 'steak-0', viewValue: 'Steak' },
                { value: 'pizza-1', viewValue: 'Pizza' },
                { value: 'tacos-2', viewValue: 'Tacos' }
            ]
        }
    })
    .add('Select with form field features', {
        template: `
        <mat-form-field>
            <mat-select placeholder="Favorite animal" [formControl]="animalControl" required>
                <mat-option>--</mat-option>
                <mat-option *ngFor="let animal of animals" [value]="animal">
                {{animal.name}}
                </mat-option>
            </mat-select>
            <mat-error *ngIf="animalControl.hasError('required')">Please choose an animal</mat-error>
            <mat-hint>{{animalControl.value?.sound}}</mat-hint>
        </mat-form-field>
        `,
        context: {
            animalControl: new FormControl('', [Validators.required]),
            animals: [
                { name: 'Dog', sound: 'Woof!' },
                { name: 'Cat', sound: 'Meow!' },
                { name: 'Cow', sound: 'Moo!' },
                { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
            ]
        }
    })
    .add('Disabled select', {
        template: `
        <p>
            <mat-checkbox [formControl]="disableSelect">Disable select</mat-checkbox>
        </p>
        <p>
            <mat-form-field>
                <mat-select placeholder="Choose an option" [disabled]="disableSelect.value">
                    <mat-option value="option1">Option 1</mat-option>
                    <mat-option value="option2" disabled>Option 2 (disabled)</mat-option>
                    <mat-option value="option3">Option 3</mat-option>
                </mat-select>
            </mat-form-field>
        </p>
        `,
        context: {
            disableSelect: new FormControl(false)
        }
    })
    .add('Select with option groups', {
        template: `
        <mat-form-field>
            <mat-select placeholder="Pokemon" [formControl]="pokemonControl">
                <mat-option>-- None --</mat-option>
                <mat-optgroup *ngFor="let group of pokemonGroups" [label]="group.name"
                            [disabled]="group.disabled">
                    <mat-option *ngFor="let pokemon of group.pokemon" [value]="pokemon.value">
                        {{ pokemon.viewValue }}
                    </mat-option>
                </mat-optgroup>
            </mat-select>
        </mat-form-field>
        `,
        context: {
            pokemonControl: new FormControl(),
            pokemonGroups: [
                {
                    name: 'Grass',
                    pokemon: [
                        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                        { value: 'oddish-1', viewValue: 'Oddish' },
                        { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                    ]
                },
                {
                    name: 'Water',
                    pokemon: [
                        { value: 'squirtle-3', viewValue: 'Squirtle' },
                        { value: 'psyduck-4', viewValue: 'Psyduck' },
                        { value: 'horsea-5', viewValue: 'Horsea' }
                    ]
                },
                {
                    name: 'Fire',
                    disabled: true,
                    pokemon: [
                        { value: 'charmander-6', viewValue: 'Charmander' },
                        { value: 'vulpix-7', viewValue: 'Vulpix' },
                        { value: 'flareon-8', viewValue: 'Flareon' }
                    ]
                },
                {
                    name: 'Psychic',
                    pokemon: [
                        { value: 'mew-9', viewValue: 'Mew' },
                        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                    ]
                }
            ]
        }
    })
    .add('Select with multiple selection', {
        template: `
        <mat-form-field>
            <mat-select placeholder="Toppings" [formControl]="toppings" multiple>
                <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
            </mat-select>
        </mat-form-field>
        `,
        context: {
            toppings: new FormControl(),
            toppingList: ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato']
        }
    });
