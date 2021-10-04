import { FilterContentPipe } from './filter-content.pipe';

describe('ContentPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterContentPipe();
    expect(pipe).toBeTruthy();
  });
});
