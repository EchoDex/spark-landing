import { css } from "@emotion/react";
import Image from "next/image";

import Badge from "@/core/components/common/Badge";
import theme from "@/core/styles/theme";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

import { FeatureCardType } from "./types";
import { DecorationPlus } from "../../common/DecorationPlus";

const FeatureCard = ({ card }: { card: FeatureCardType }) => {
  const {
    imageSrc,
    badge,
    article: { header, title },
    imageLabel,
  } = card;

  return (
    <div css={cssStyles.card}>
      <DecorationPlus>
        {badge && <Badge text={badge} styles={cssStyles.badge} />}
        <div css={cssStyles.imageContainer}>
          {imageLabel && (
            <div css={cssStyles.labelContainer}>
              <Image
                src={imageLabel}
                alt="rocket"
                width={100}
                height={100}
                priority
              />
            </div>
          )}
          <Image
            src={imageSrc}
            alt="rocket"
            width={100}
            height={100}
            priority
          />
        </div>
        <div css={cssStyles.content}>
          <h3 css={cssStyles.h3}>{header}</h3>
          <p css={cssStyles.paragraph}>{title.text}</p>
        </div>
      </DecorationPlus>
    </div>
  );
};

const cssStyles = {
  card: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${theme.spacing.large};
    margin-bottom: ${theme.spacing.custom[10]};
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.grey.dark};

    ${theme.media.tabletBreakPoint} {
      align-items: center;
    }

    ${theme.media.tabletLandscape} {
      width: 50%;
      &:first-child {
        margin-right: ${theme.spacing.custom[10]};
      }
    }
  `,
  badge: css`
    margin-top: ${theme.spacing.custom[20]};
    margin-bottom: ${theme.spacing.large};

    ${theme.media.tabletBreakPoint} {
      margin-top: ${theme.spacing.huge};
      margin-left: 0;
    }
  `,
  imageContainer: css`
    position: relative;
    width: ${convertPxToRem(268)};
    height: ${convertPxToRem(92)};
    margin-bottom: ${theme.spacing.large};

    ${theme.media.tabletBreakPoint} {
      width: ${convertPxToRem(377)};
      height: ${convertPxToRem(120)};
      margin-bottom: ${theme.spacing.extraHuge};
    }

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  labelContainer: css`
    width: ${convertPxToRem(56)};
    height: ${convertPxToRem(56)};
    position: absolute;
    right: ${convertPxToRem(-22)};
    top: ${convertPxToRem(-29)};

    ${theme.media.tabletBreakPoint} {
      width: ${convertPxToRem(82)};
      height: ${convertPxToRem(82)};
    }

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  content: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    word-wrap: break-word;

    ${theme.media.tabletBreakPoint} {
      margin-left: 0;
      align-items: center;
      text-align: center;
    }
  `,
  h3: css`
    font-size: ${theme.text.size.medium};
    font-weight: ${theme.text.size.medium};
    margin-bottom: ${theme.spacing.normal};

    ${theme.media.tabletLandscape} {
      font-size: ${theme.text.size.headline};
      font-weight: ${theme.text.weight.extraBold};
      margin-bottom: ${theme.spacing.medium};
    }
  `,
  paragraph: css`
    word-wrap: break-word;
    color: ${theme.colors.grey.light};
    font-size: ${theme.text.size.extraTiny};
    margin-bottom: ${theme.spacing.medium};
    width: 90%;

    ${theme.media.tabletBreakPoint} {
      font-size: ${theme.text.size.small};
      text-align: center;
      width: 65%;
    }
  `,
};

export default FeatureCard;
