export default Quill => {
  let BlockEmbed = Quill.import("blots/block/embed");

  class HorizontalRule extends BlockEmbed {}
  HorizontalRule.blotName = "hr";
  HorizontalRule.tagName = "hr";

  return HorizontalRule;
};
