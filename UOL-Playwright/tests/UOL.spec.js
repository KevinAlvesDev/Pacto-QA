const { test, expect } = require('@playwright/test');

test('Acessa UOL, clica no link de normas e valida atualização', async ({ page }) => {
  const urlUOL = 'https://www.uol.com.br/';
  const urlNormas = 'https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade.html';

  const linkSelector = `a[href="${urlNormas}"]`;

  await page.goto(urlUOL);

  const link = page.locator(linkSelector);
  await expect(link).toBeVisible();

  // Clica no link
  await link.click();

  await page.waitForURL('**/normas-de-seguranca-e-privacidade.html');

  await page.waitForLoadState('load');

  const atualizacao = page.locator('strong', { hasText: 'Atualização:' });

  await atualizacao.scrollIntoViewIfNeeded();

  await expect(atualizacao).toBeVisible();
});
