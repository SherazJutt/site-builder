export default defineAppConfig({
  ui: {
    select: {
      slots: { trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' },
      defaultVariants: {
        size: 'md',
        color: 'warning',
        variant: 'outline',
      },
    },
  },
});
