import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { Productos } from './productos';

describe('Productos', () => {
  let component: Productos;
  let fixture: ComponentFixture<Productos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productos],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Productos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the next product image when the arrow is clicked', () => {
    const images = fixture.nativeElement.querySelectorAll(
      '.carrusel-imagenes img'
    ) as NodeListOf<HTMLImageElement>;

    expect(images.length).toBe(2);
    expect(images[0].classList.contains('activa')).toBe(true);

    const nextButton = fixture.nativeElement.querySelector(
      '.flecha.siguiente'
    ) as HTMLButtonElement;
    nextButton.click();
    fixture.detectChanges();

    expect(images[0].classList.contains('activa')).toBe(false);
    expect(images[1].classList.contains('activa')).toBe(true);
    expect(component.imagenActual).toBe(1);
  });
});
