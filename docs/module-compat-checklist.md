### Module compatibility smoke test checklist

- Load order: Verify no console errors during system initialization
- Templates: Ensure common Handlebars helpers work alongside popular UI modules
- CSS: Confirm no global resets break Foundry core layouts; check modals/windows
- Hooks: System hooks do not override or block module hooks unexpectedly
- i18n: Missing key logs are warnings only; system functions with external modules
- Performance: With common modules enabled, measure initial render time and FPS
- Screenshots: Re-run visual tests with modules enabled (where feasible)
