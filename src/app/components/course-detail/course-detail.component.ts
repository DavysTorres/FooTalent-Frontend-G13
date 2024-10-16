import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  courseId: string | null = null;
  course: any = null; // Para almacenar los datos del curso seleccionado

  // Arreglo ficticio de cursos
  courses = [
    {
      id: '1',
      title: 'Curso de PHP y Bases de datos',
      description:
        'Este curso está diseñado para principiantes que desean adentrarse en el mundo del desarrollo web utilizando PHP. Aprenderás los conceptos básicos de programación, cómo crear aplicaciones web dinámicas y cómo interactuar con bases de datos. Con una metodología práctica, cada módulo incluye ejercicios y proyectos que te permitirán aplicar lo aprendido.',
      image: '/assets/images/php.png',
      details: {
        modality: 'Virtual y 100% gratuito.',
        requirements:
          'No se requieren conocimientos previos. Solo necesitarás un ordenador con acceso a Internet y muchas ganas de aprender.',
        duration:
          'El curso se divide en 8 módulos, con una duración total de 4 semanas. Cada módulo incluye vídeos, lecturas y ejercicios prácticos.',
        objectives: [
          'Fundamentos de PHP: Sintaxis, variables y operadores.',
          'Control de flujo: Estructuras de decisión y bucles.',
          'Funciones y programación orientada a objetos.',
          'Manejo de formularios y validación de datos.',
          'Conexión y manipulación de bases de datos con MySQL.',
          'Creación de aplicaciones dinámicas con PHP y MySQL.',
        ],
        thiscourse:
          'PHP es uno de los lenguajes de programación más utilizados en la web. Con este curso gratuito, podrás adquirir habilidades valiosas que te abrirán las puertas a múltiples oportunidades en el campo del desarrollo web. Además, al finalizar, recibirás un certificado que avala tus conocimientos.',
        teacher: {
          name: 'María Cristina Del Valle',
          bio: 'Desarrolladora web. Profesora en DevAcademy',
        },
        reviews: 1200,
        rating: 4.8,
      },
    },
    {
      id: '2',
      title: 'Curso de Diseño Web',
      description:
        'Este curso de HTML está diseñado para quienes desean dar sus primeros pasos en el desarrollo web. Aprenderás a crear y estructurar páginas web utilizando HTML, el lenguaje fundamental de la web. A través de ejercicios prácticos y ejemplos, adquirirás la habilidades necesarias para construir tu propio sitio.',
      image: '/assets/images/html.png',
      details: {
        modality: 'Virtual y 100% gratuito.',
        requirements:
          'No se requieren conocimientos previos. Solo necesitarás un ordenador con acceso a Internet y muchas ganas de aprender.',
        duration:
          'El curso se divide en 8 módulos, con una duración total de 4 semanas. Cada módulo incluye vídeos, lecturas y ejercicios prácticos.',
        objectives: [
          'Introducción a HTML. Estructura de una página web.',
          'Etiquetas HTML: textos, imágenes, enlaces y listas.',
          'Formularios: cómo recolectar información del usuario.',
          'Semántica HTML: mejora la accesibilidad y SEO de tus páginas.',
          'Introducción a CSS para estilizar tus páginas.',
        ],
        thiscourse:
          'HTML es la base del desarrollo web y aprenderlo te abrirá las puertas a muchas oportunidades en el campo digital. Este curso gratuito te proporciona una formación sólida que te permitirá avanzar hacia tecnologías más complejas. Al finalizar, recibirás un certificado que respalda tus habilidades.',
        teacher: {
          name: 'Angélica Mercedes Díaz',
          bio: 'Desarrolladora web. Profesora en DevAcademy',
        },
        reviews: 1200,
        rating: 4.8,
      },
    },
    {
      id: '3',
      title: 'Curso de Phyton',
      description:
        'Este curso de Phyton está diseñado para quienes desean iniciarse en la programación. Con un enfoque práctico y accesible, aprenderás los fundamentos de Phyton, uno de los lenguajes de programación más populares y versátiles del mundo. A través de ejemplos y ejercicios, desarrollarás tus habilidades para resolver problemas y crear aplicaciones.',
      image: '/assets/images/phyton.png',
      details: {
        modality: 'Virtual y 100% gratuito.',
        requirements:
          'No se requieren conocimientos previos. Solo necesitarás un ordenador con acceso a Internet y muchas ganas de aprender.',
        duration:
          'El curso se divide en 8 módulos, con una duración total de 4 semanas. Cada módulo incluye vídeos, lecturas y ejercicios prácticos.',
        objectives: [
          'Introducción a la sintaxis de Phyton y sus estructuras básicas.',
          'Tipos de datos, variables y operaciones.',
          'Control de flujo: condicionales y bucles.',
          'Funciones y manejo de errores.',
          'Introducción a la programación orientada a objetos.',
          'Uso de bibliotecas populares para proyectos prácticos.',
        ],
        thiscourse:
          'Phyton es un lenguaje muy demandado en diversas industrias, desde desarrollo web hasta ciencia de datos. Este curso gratuito te proporcionará una base sólida y te preparará para seguir explorando el mundo de la programación. Al finalizar, recibirás un certificado que avala tus conocimientos.',
        teacher: {
          name: 'Héctor González Rojas',
          bio: 'Desarrollador web. Profesor en DevAcademy',
        },
        reviews: 1200,
        rating: 4.8,
      },
    },
    {
      id: '4',
      title: 'Curso de Java',
      description:
        'Este curso de Java está diseñado para principiantes que desean aprender uno de los lenguajes de programación más utilizados en el mundo. A través de lecciones prácticas y ejemplos reales, te introducirás en la programación orientada a objetos y desarrollarás aplicaciones robustas y escalables.',
      image: '/assets/images/java.png',
      details: {
        modality: 'Virtual y 100% gratuito.',
        requirements:
          'No se requieren conocimientos previos. Solo necesitarás un ordenador con acceso a Internet y muchas ganas de aprender.',
        duration:
          'El curso se divide en 8 módulos, con una duración total de 4 semanas. Cada módulo incluye vídeos, lecturas y ejercicios prácticos.',
        objectives: [
          'Fundamentos de Java: sintaxis y estructura básica del lenguaje.',
          'Tipos de datos, variables y operadores.',
          'Control de flujo: condicionales y bucles.',
          'Programación orientada a objetos: clases, objetos y herencia.',
          'Manejo de excepciones y depuración.',
          'Creación de aplicaciones simples y proyectos prácticos.',
        ],
        thiscourse:
          'Java es un lenguaje versátil y muy demandado en el mercado labora, utilizado en aplicaciones web, móviles y sistemas empresariales. Este curso gratuito te proporcionará una base sólida en programación, que te permitirá avanzar hacia proyectos más complejos.',
        teacher: {
          name: 'Damián Martínez',
          bio: 'Desarrollador web. Profesor en DevAcademy',
        },
        reviews: 1200,
        rating: 4.8,
      },
    },
    {
      id: '5',
      title: 'Curso de JavaScript',
      description:
        'Este curso de JavaScript está diseñado para quienes desean aprender a hacer páginas web interactivas y dinámicas. A través de lecciones prácticas y ejemplos, descubrirás cómo JavaScript transforma HTML y CSS en experiencias web envolventes.',
      image: '/assets/images/javascript.png',
      details: {
        modality: 'Virtual y 100% gratuito.',
        requirements:
          'No se requieren conocimientos previos. Solo necesitarás un ordenador con acceso a Internet y muchas ganas de aprender.',
        duration:
          'El curso se divide en 8 módulos, con una duración total de 4 semanas. Cada módulo incluye vídeos, lecturas y ejercicios prácticos.',
        objectives: [
          'Fundamentos de JavaScript: sintaxis y estructuras básicas',
          'Manipulación del DOM: cómo interactuar con elementos HTML.',
          'Eventos: cómo hacer que tus páginas respondan a la interacción del usuario.',
          'Funciones y programación orientada a objetos.',
          'Introducción a bibliotecas y frameworks como jQuery.',
          'Proyecto final: crea una aplicación web interactiva.',
        ],
        thiscourse:
          'JavaScript es esencial en el desarrollo web moderno y te permitirá crear aplicaciones y sitios atractivos y funcionales. Este curso gratuito te brindará una base sólida que te preparará para continuar tu aprendizaje en tecnologías más avanzadas.',
        teacher: {
          name: 'Ana Laura Paredes',
          bio: 'Desarrolladora web. Profesora en DevAcademy',
        },
        reviews: 1200,
        rating: 4.8,
      },
    },
    {
      id: '6',
      title: 'Curso de C++',
      description:
        'Este curso de C++ está diseñado para quienes desean adentrarse en la programación con uno de los lenguajes más poderosos y versátiles. Aprenderás los conceptos fundamentales de la programación y cómo aplicar C++ en el desarrollo de aplicaciones y sistemas.',
      image: '/assets/images/c.png',
      details: {
        modality: 'Virtual y 100% gratuito.',
        requirements:
          'No se requieren conocimientos previos. Solo necesitarás un ordenador con acceso a Internet y muchas ganas de aprender.',
        duration:
          'El curso se divide en 8 módulos, con una duración total de 4 semanas. Cada módulo incluye vídeos, lecturas y ejercicios prácticos.',
        objectives: [
          'Fundamentos de C++: sintaxis, variables y operadores.',
          'Control de flujo: condicionales y bucles.',
          'Funciones y manejo de errores.',
          'Programación orientada a objetos: clases, objetos y herencia.',
          'Manejo de memoria y punteros.',
          'Proyecto final: desarrolla una aplicación sencilla en C++.',
        ],
        thiscourse:
          'C++ es un lenguaje clave en el desarrollo de software, utilizado en aplicaciones de sistemas, videojuegos y programación de alto rendimiento. Este curso gratuito te proporcionará una base sólida que te permitirá avanzar en tu carrera en el campo de la programación. Al finalizar, recibirás un certificado que avala tus conocimientos.',
        teacher: {
          name: 'Alejandro Suárez',
          bio: 'Desarrollador web. Profesor en DevAcademy',
        },
        reviews: 1200,
        rating: 4.8,
      },
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private library: FaIconLibrary
  ) {
    this.library.addIcons(faArrowLeft);
  }

  ngOnInit(): void {
    // Obtén el parámetro 'id' de la ruta y busca el curso
    this.route.paramMap.subscribe((params) => {
      this.courseId = params.get('id');
      if (this.courseId) {
        this.course = this.courses.find((c) => c.id === this.courseId);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/cursos']);
  }
}
