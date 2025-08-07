const { test, expect } = require('@playwright/test');

test('Buscar "Pacto Soluções" no Yahoo e clicar no botão de consentimento', async ({ page }) => {
  await page.goto('https://br.yahoo.com/');
  await page.fill('input[name="p"]', 'Pacto Soluções');

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    page.keyboard.press('Enter'),
  ]);

  const resultados = page.locator('#web > ol > li');
  await expect(resultados.first()).toBeVisible();

  const linkEsperado = page.locator('#web > ol > li a[href="https://sistemapacto.com.br/"]');
  await expect(linkEsperado).toHaveCount(1);

  await page.waitForTimeout(2000);
});
