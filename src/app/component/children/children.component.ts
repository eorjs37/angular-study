import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() prop: string | undefined;

  constructor() {
    console.log('children constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[childeren OnChanges]');
    console.log(`[childeren OnChanges prop]  : ${this.prop}`);
    console.log('[childeren OnChanges changes] : ', changes);
  }

  ngOnInit(): void {
    console.log('[childeren OnInit]');
    console.log(`[childeren OnInit prop]  : ${this.prop}`);
  }

  ngDoCheck(): void {
    console.log('[children ngDoCheck]');
  }

  ngAfterContentInit(): void {
    console.log('[children ngAfterContentInit]');
  }

  ngAfterContentChecked(): void {
    console.log('[children ngAfterContentChecked]');
  }

  ngAfterViewInit(): void {
    console.log('[children ngAfterViewInit]');
  }

  ngAfterViewChecked(): void {
    console.log('[children ngAfterViewChecked]');
  }

  ngOnDestroy(): void {
    console.log('[children ngOnDestroy]');
  }
}
