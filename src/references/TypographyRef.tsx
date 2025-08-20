import { Typography } from "../elements";
import type { TypographyProps } from "../elements/Typography/Typography.types";

const TypographyRef = () => {
  const variants: TypographyProps["variant"][] = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "overline",
    "button",
  ];

  const colors: TypographyProps["color"][] = [
    "primary",
    "secondary",
    "error",
    "warning",
    "info",
    "success",
    "textPrimary",
    "textSecondary",
  ];

  const aligns: TypographyProps["align"][] = [
    "left",
    "center",
    "right",
    "justify",
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <Typography variant="h4" gutterBottom>
          Typography Variants
        </Typography>
        <div className="space-y-4">
          {variants.map((variant) => (
            <div key={variant}>
              <Typography variant={variant}>
                {variant}: The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Typography variant="h4" gutterBottom>
          Typography Colors
        </Typography>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color}>
              <Typography color={color}>
                {color}: The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Typography variant="h4" gutterBottom>
          Typography Alignments
        </Typography>
        <div className="space-y-2">
          {aligns.map((align) => (
            <div key={align}>
              <Typography align={align}>
                {align}: The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Typography variant="h4" gutterBottom>
          Typography with Custom Styling
        </Typography>
        <div className="space-y-4">
          <Typography variant="body1" fontWeight="bold">
            Bold text: This is bold body text
          </Typography>
          <Typography variant="body1" fontStyle="italic">
            Italic text: This is italic body text
          </Typography>
          <Typography variant="body1" lineHeight="tight">
            Tight line height: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Typography>
          <Typography variant="body1" letterSpacing="wide">
            Wide letter spacing: Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body1" noWrap>
            No wrap: This is a very long text that should not wrap and should
            show ellipsis if it overflows
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TypographyRef;
