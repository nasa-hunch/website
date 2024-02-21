import { expect, test } from '@playwright/test';

test('user can register', async ({ page }) => {
	await page.goto('/get-started');
	await page.waitForSelector('body.started', { timeout: 5000 });

	await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();

	await page.locator('input[name="firstName"]').fill('Test');
	await page.locator('input[name="lastName"]').fill('User');
	await page.locator('input[name="email"]').fill(`test${crypto.randomUUID()}@nasa.hunch`);
	await page.locator('input[name="auth1"]').fill('password');
	await page.locator('input[name="auth2"]').fill('password');
	await page.locator('button[type="submit"]').click();

	await expect(page.locator('text=Error')).not.toBeVisible();

	await page.waitForURL('/dashboard');

	await expect(
		page.locator(
			'text=Welcome to NASA Hunch! To verify your identity, we need to know a little more about you.'
		)
	).toBeVisible();
});
