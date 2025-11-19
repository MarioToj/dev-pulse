export class BlogPostHelper {
  static createSlug(title: string): string {
    const slug = title
      .normalize('NFD') // descompone caracteres con tilde
      .replace(/[\u0300-\u036f]/g, '') // elimina los diacríticos
      .toLowerCase()
      .replace(/\s+/g, '-') // espacios guiones
      .replace(/[^a-z0-9-]/g, ''); // limpia caracteres especiales

    const timestamp = Date.now();
    return `${slug}-${timestamp}`;
  }
}
