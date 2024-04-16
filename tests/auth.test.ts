import crypto from 'node:crypto';

import { expect, test } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

const randomUUID = crypto.randomUUID();

test('user can register', async ({ page }) => {
	await page.goto('/get-started');
	await page.waitForSelector('body.started', { timeout: 5000 });

	await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();

	await page.locator('input[name="firstName"]').fill('Test');
	await page.locator('input[name="lastName"]').fill('User');
	await page.locator('input[name="email"]').fill(`test${randomUUID}@nasa.hunch`);
	await page.locator('input[name="pass1"]').fill('password');
	await page.locator('input[name="pass2"]').fill('password');
	await page.locator('button[type="submit"]').click();

	await expect(page.locator('text=Error')).not.toBeVisible();

	await page.waitForURL('/more-info');

	await expect(
		page.locator(
			'text=Join with an invite code'
		)
	).toBeVisible();
});

test('User can log in', async ({ page }) => {
	await page.goto('/login');
	await page.locator('input[name="email"]').fill(`test${randomUUID}@nasa.hunch`);
	await page.locator('input[name="password"]').fill('password');
	await page.locator('button[type="submit"]').click();
	await expect(page.locator('text=Error')).not.toBeVisible();
});
