# Patrones SVG Tecnológicos - Portfolio Paul Sánchez

## Descripción

Se han reemplazado todas las animaciones de fondo del portfolio con patrones SVG tecnológicos coherentes y visualmente atractivos. Estos patrones mantienen la temática tecnológica del portfolio mientras proporcionan un fondo estático pero dinámico visualmente.

## Patrones Implementados

### 1. HexagonPattern
- **Descripción**: Patrón de hexágonos que simula una estructura de panal tecnológico
- **Uso**: Header, Education
- **Características**: Formas geométricas regulares, sutil y elegante

### 2. CircuitPattern
- **Descripción**: Patrón de circuitos electrónicos con líneas y nodos
- **Uso**: Header, Skills, Experience
- **Características**: Simula conexiones de circuitos integrados

### 3. DotPattern
- **Descripción**: Patrón de puntos distribuidos uniformemente
- **Uso**: About, Education
- **Características**: Minimalista y limpio

### 4. WavePattern
- **Descripción**: Patrón de ondas suaves y fluidas
- **Uso**: About, Education
- **Características**: Orgánico y dinámico

### 5. GridPattern
- **Descripción**: Cuadrícula tecnológica sutil
- **Uso**: Contact
- **Características**: Estructurado y ordenado

### 6. TrianglePattern
- **Descripción**: Patrón de triángulos geométricos
- **Uso**: Skills
- **Características**: Angular y tecnológico

### 7. StarPattern
- **Descripción**: Patrón de estrellas de 5 puntas
- **Uso**: Header, Experience
- **Características**: Inspirado en constelaciones tecnológicas

### 8. SpiralPattern
- **Descripción**: Patrón de espirales concéntricas
- **Uso**: Experience
- **Características**: Orgánico y fluido

### 9. BinaryPattern
- **Descripción**: Patrón con texto "01" repetido
- **Uso**: Skills, Contact
- **Características**: Referencia directa al código binario

### 10. NetworkPattern
- **Descripción**: Patrón de nodos conectados por líneas
- **Uso**: Skills, Contact
- **Características**: Simula una red de conexiones

## Componente TechBackground

El componente `TechBackground` permite combinar múltiples patrones en una sola sección:

```tsx
<TechBackground patterns={['hexagon', 'circuit', 'star']} />
```

### Parámetros:
- `patterns`: Array de patrones a combinar
- `className`: Clases CSS adicionales

## Distribución por Secciones

### Header
- **Patrones**: hexagon, circuit, star
- **Justificación**: Combinación de elementos tecnológicos y estelares

### About
- **Patrones**: dot, wave, grid
- **Justificación**: Patrones suaves y orgánicos para la sección de presentación

### Skills
- **Patrones**: triangle, network, binary
- **Justificación**: Patrones más técnicos y estructurados

### Experience
- **Patrones**: spiral, circuit, star
- **Justificación**: Combinación de fluidez y tecnología

### Education
- **Patrones**: hexagon, dot, wave
- **Justificación**: Patrones elegantes y académicos

### Contact
- **Patrones**: grid, network, binary
- **Justificación**: Patrones de conexión y comunicación

## Ventajas de los Patrones SVG

1. **Rendimiento**: Los patrones SVG son estáticos y no consumen recursos de CPU
2. **Escalabilidad**: Se adaptan perfectamente a cualquier tamaño de pantalla
3. **Coherencia**: Mantienen una temática tecnológica consistente
4. **Accesibilidad**: No distraen del contenido principal
5. **Mantenibilidad**: Fáciles de modificar y personalizar

## Personalización

Los patrones se pueden personalizar modificando:
- Colores en el archivo `lib/svgPatterns.tsx`
- Opacidad en las clases CSS
- Combinaciones de patrones por sección
- Tamaños y espaciados en los viewBox

## Animaciones Eliminadas

Se han eliminado las siguientes animaciones de fondo:
- Estrellas animadas en Header
- Líneas deslizantes en Experience
- Círculos rotatorios en Education
- Ondas animadas en Contact
- Elementos decorativos flotantes

Estas animaciones han sido reemplazadas por patrones SVG estáticos que mantienen la estética tecnológica sin consumir recursos de rendimiento.
