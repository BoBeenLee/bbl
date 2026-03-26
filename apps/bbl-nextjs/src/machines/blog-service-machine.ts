import { blogMachine } from '@bbl-nx/features/blog/machines/blog-machine';
import { fetchMD } from '../apis/blog';

export const blogServiceWithConfig = blogMachine.withConfig({
  services: {
    fetchMD,
  },
});
