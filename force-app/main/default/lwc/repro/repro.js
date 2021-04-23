import { LightningElement } from 'lwc';
import example from '@salesforce/label/c.example';

export default class Repro extends LightningElement {
    get value() {
        return example;
    }
}