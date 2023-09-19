<script lang="ts">
	import Official from '$lib/Official.svelte';
</script>

<Official />
<a class="usa-skipnav" href="#main-content">Skip to main content</a>
<div class="usa-overlay" />
<header class="usa-header usa-header--basic">
	<div class="usa-nav-container">
		<div class="usa-navbar">
			<div class="usa-logo">
				<em class="usa-logo__text"><a href="/" title="<Project title>">&lt;Project title&gt;</a></em
				>
			</div>
		</div>
	</div>
</header>
<main id="main-content">
	<section class="usa-hero" aria-label="Introduction">
		<div class="grid-container">
			<div class="usa-hero__callout">
				<h1 class="usa-hero__heading">
					<span class="usa-hero__heading--alt">Hero callout:</span>Bring attention to a project
					priority
				</h1>
				<p>
					Support the callout with some short explanatory text. You don’t need more than a couple of
					sentences.
				</p>
				<a class="usa-button" href="">Call to action</a>
			</div>
		</div>
	</section>
	<section class="grid-container usa-section">
		<div class="grid-row grid-gap">
			<div class="tablet:grid-col-4">
				<h2 class="font-heading-xl margin-top-0 tablet:margin-bottom-0">
					A tagline highlights your approach
				</h2>
			</div>
			<div class="tablet:grid-col-8 usa-prose">
				<p>
					The tagline should inspire confidence and interest, focusing on the value that your
					overall approach offers to your audience. Use a heading typeface and keep your tagline to
					just a few words, and don’t confuse or mystify.
				</p>
				<p>
					Use the right side of the grid to explain the tagline a bit more. What are your goals? How
					do you do your work? Write in the present tense, and stay brief here. People who are
					interested can find details on internal pages.
				</p>
			</div>
		</div>
	</section>
	<section class="usa-graphic-list usa-section usa-section--dark">
		<div class="grid-container">
			<div class="usa-graphic-list__row grid-row grid-gap">
				<div class="usa-media-block tablet:grid-col">
					<img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="Alt text" />
					<div class="usa-media-block__body">
						<h2 class="usa-graphic-list__heading">Graphic headings can vary.</h2>
						<p>
							Graphic headings can be used a few different ways, depending on what your landing page
							is for. Highlight your values, specific program areas, or results.
						</p>
					</div>
				</div>
				<div class="usa-media-block tablet:grid-col">
					<img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="Alt text" />
					<div class="usa-media-block__body">
						<h2 class="usa-graphic-list__heading">Stick to 6 or fewer words.</h2>
						<p>
							Keep body text to about 30 words. They can be shorter, but try to be somewhat balanced
							across all four. It creates a clean appearance with good spacing.
						</p>
					</div>
				</div>
			</div>
			<div class="usa-graphic-list__row grid-row grid-gap">
				<div class="usa-media-block tablet:grid-col">
					<img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="Alt text" />
					<div class="usa-media-block__body">
						<h2 class="usa-graphic-list__heading">Never highlight anything without a goal.</h2>
						<p>
							For anything you want to highlight here, understand what your users know now, and what
							activity or impression you want from them after they see it.
						</p>
					</div>
				</div>
				<div class="usa-media-block tablet:grid-col">
					<img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="Alt text" />
					<div class="usa-media-block__body">
						<h2 class="usa-graphic-list__heading">Could also have 2 or 6.</h2>
						<p>
							In addition to your goal, find out your users’ goals. What do they want to know or do
							that supports your mission? Use these headings to show those.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="test-section-id" class="usa-section">
		<div class="grid-container">
			<h2 class="font-heading-xl margin-y-0">Section heading</h2>
			<p class="usa-intro">
				Everything up to this point should help people understand your agency or project: who you
				are, your goal or mission, and how you approach it. Use this section to encourage them to
				act. Describe why they should get in touch here, and use an active verb on the button below.
				“Get in touch,” “Learn more,” and so on.
			</p>
			<a class="usa-button usa-button--big" href="">Call to action</a>
		</div>
	</section>
</main>
<footer class="usa-footer">
	<div class="grid-container usa-footer__return-to-top">
		<a href="#">Return to top</a>
	</div>
	<div class="usa-footer__primary-section">
		<nav class="usa-footer__nav" aria-label="Footer navigation">
			<ul class="grid-row grid-gap">
				<li
					class="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
				>
					<a class="usa-footer__primary-link" href="javascript:void(0);">&lt;Primary link&gt;</a>
				</li>
				<li
					class="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
				>
					<a class="usa-footer__primary-link" href="javascript:void(0);">&lt;Primary link&gt;</a>
				</li>
				<li
					class="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
				>
					<a class="usa-footer__primary-link" href="javascript:void(0);">&lt;Primary link&gt;</a>
				</li>
				<li
					class="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
				>
					<a class="usa-footer__primary-link" href="javascript:void(0);">&lt;Primary link&gt;</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="usa-footer__secondary-section">
		<div class="grid-container">
			<div class="grid-row grid-gap">
				<div
					class="
                usa-footer__logo
                grid-row
                mobile-lg:grid-col-6 mobile-lg:grid-gap-2
              "
				>
					<div class="mobile-lg:grid-col-auto">
						<img class="usa-footer__logo-img" src="/assets/img/logo-img.png" alt="" />
					</div>
					<div class="mobile-lg:grid-col-auto">
						<p class="usa-footer__logo-heading">&lt;Name of Agency&gt;</p>
					</div>
				</div>
				<div class="usa-footer__contact-links mobile-lg:grid-col-6">
					<div class="usa-footer__social-links grid-row grid-gap-1">
						<div class="grid-col-auto">
							<a class="usa-social-link" href="javascript:void(0);"
								><img
									class="usa-social-link__icon"
									src="/assets/img/usa-icons/facebook.svg"
									alt="Facebook"
								/></a
							>
						</div>
						<div class="grid-col-auto">
							<a class="usa-social-link" href="javascript:void(0);"
								><img
									class="usa-social-link__icon"
									src="/assets/img/usa-icons/twitter.svg"
									alt="Twitter"
								/></a
							>
						</div>
						<div class="grid-col-auto">
							<a class="usa-social-link" href="javascript:void(0);"
								><img
									class="usa-social-link__icon"
									src="/assets/img/usa-icons/youtube.svg"
									alt="YouTube"
								/></a
							>
						</div>
						<div class="grid-col-auto">
							<a class="usa-social-link" href="javascript:void(0);"
								><img
									class="usa-social-link__icon"
									src="/assets/img/usa-icons/instagram.svg"
									alt="Instagram"
								/></a
							>
						</div>
						<div class="grid-col-auto">
							<a class="usa-social-link" href="javascript:void(0);"
								><img
									class="usa-social-link__icon"
									src="/assets/img/usa-icons/rss_feed.svg"
									alt="RSS"
								/></a
							>
						</div>
					</div>
					<p class="usa-footer__contact-heading">&lt;Agency Contact Center&gt;</p>
					<address class="usa-footer__address">
						<div class="usa-footer__contact-info grid-row grid-gap">
							<div class="grid-col-auto">
								<a href="tel:1-800-555-5555">&lt;(800) 555-GOVT&gt;</a>
							</div>
							<div class="grid-col-auto">
								<a href="mailto:info@agency.gov">&lt;info@agency.gov&gt;</a>
							</div>
						</div>
					</address>
				</div>
			</div>
		</div>
	</div>
</footer>
<div class="usa-identifier">
	<section
		class="usa-identifier__section usa-identifier__section--masthead"
		aria-label="Agency identifier"
	>
		<div class="usa-identifier__container">
			<div class="usa-identifier__logos">
				<a href="javascript:void(0)" class="usa-identifier__logo"
					><img
						class="usa-identifier__logo-img"
						src="/assets/img/circle-gray-20.svg"
						alt="&lt;Parent agency&gt; logo"
						role="img"
					/></a
				>
			</div>
			<section class="usa-identifier__identity" aria-label="Agency description">
				<p class="usa-identifier__identity-domain">domain.gov</p>
				<p class="usa-identifier__identity-disclaimer">
					An official website of the <a href="">&lt;Parent agency&gt;</a>
				</p>
			</section>
		</div>
	</section>
	<nav
		class="usa-identifier__section usa-identifier__section--required-links"
		aria-label="Important links"
	>
		<div class="usa-identifier__container">
			<ul class="usa-identifier__required-links-list">
				<li class="usa-identifier__required-links-item">
					<a href="javascript:void(0)" class="usa-identifier__required-link usa-link"
						>About &lt;Parent shortname&gt;</a
					>
				</li>
				<li class="usa-identifier__required-links-item">
					<a href="" class="usa-identifier__required-link usa-link">Accessibility support</a>
				</li>
				<li class="usa-identifier__required-links-item">
					<a href="" class="usa-identifier__required-link usa-link">FOIA requests</a>
				</li>
				<li class="usa-identifier__required-links-item">
					<a href="" class="usa-identifier__required-link usa-link">No FEAR Act data</a>
				</li>
				<li class="usa-identifier__required-links-item">
					<a href="" class="usa-identifier__required-link usa-link"
						>Office of the Inspector General</a
					>
				</li>
				<li class="usa-identifier__required-links-item">
					<a href="" class="usa-identifier__required-link usa-link">Performance reports</a>
				</li>
				<li class="usa-identifier__required-links-item">
					<a href="" class="usa-identifier__required-link usa-link">Privacy policy</a>
				</li>
			</ul>
		</div>
	</nav>
	<section
		class="usa-identifier__section usa-identifier__section--usagov"
		aria-label="U.S. government information and services"
	>
		<div class="usa-identifier__container">
			<div class="usa-identifier__usagov-description">
				Looking for U.S. government information and services?
			</div>
			<a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
		</div>
	</section>
</div>
