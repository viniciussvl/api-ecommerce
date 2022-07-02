import slugify from '../../src/utils/slugify';

describe('Slugify', () => {
  test('should return slug from string', () => {
    const text = 'Titulo do Produto';
    const slug = slugify(text);
    expect(slug).toBe('titulo-do-produto');
  });

  test('should return slug from string with different separator', () => {
    const text = 'Titulo da Noticia';
    const separator = '_';

    expect(slugify(text, separator)).toBe('titulo_da_noticia');
  });
});
