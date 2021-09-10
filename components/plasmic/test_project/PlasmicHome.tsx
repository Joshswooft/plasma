// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9s3hvugvPEapsUg57TTaoR
// Component: PTxe7Daxv2V
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 778_gT31YB5/component
import TopSection from "../../TopSection"; // plasmic-import: UPgMAOBHz74/component
import Section from "../../Section"; // plasmic-import: oVVzPbYKNL5/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: WtSsUtjw8TA/component
import Testimonial from "../../Testimonial"; // plasmic-import: Yj7xu_zidJUc/component
import HomeCta from "../../HomeCta"; // plasmic-import: -jVB3yJY4C3/component
import Footer from "../../Footer"; // plasmic-import: URmcGzGZGqG/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: JT3ou6SXd3D2/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_test_project.module.css"; // plasmic-import: 9s3hvugvPEapsUg57TTaoR/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: PTxe7Daxv2V/css

import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: z-6wWKMFSFjv/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: VCIye8NIWx6z/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: GMmt-niDVZRW/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: q-J3i4huIIis/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: EedUtefgBTIV/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: sesEwkyeF7Lc/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: AJKC3aQXFcdJ/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: nBCHY_BMhN8c/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: 5N5lVrhsSNeV/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: k6lv2DaAEZQf/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: BwUN0sFW0Hyl/icon

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof TopSection>;
  testimonial?: p.Flex<typeof Testimonial>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {
  dataFetches: PlasmicHome__Fetches;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  dataFetches?: PlasmicHome__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div className={classNames(defaultcss.all, sty.freeBox__yXo4R)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__yYq9E)}
            >
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
              />

              <TopSection
                data-plasmic-name={"topSection"}
                data-plasmic-override={overrides.topSection}
                className={classNames("__wab_instance", sty.topSection)}
              />

              <Section
                className={classNames("__wab_instance", sty.section__bAp8)}
                subtitle={
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
                title={"Explore the solutions"}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__pAcZt)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__f5Bu)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__bXQr
                    )}
                  >
                    {"Powerful suite of tools"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__baslx
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                    }
                  </div>

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__ihw4A
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <LightningIcon
                        className={classNames(defaultcss.all, sty.svg__iuUXw)}
                        role={"img"}
                      />
                    }
                    long={"long" as const}
                    title={"Building the Simple ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__eW6FU
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <HammerIcon
                        className={classNames(defaultcss.all, sty.svg__prJFx)}
                        role={"img"}
                      />
                    }
                    long={"long" as const}
                    title={"Building the Simple Ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__paKz9
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <PencilIcon
                        className={classNames(defaultcss.all, sty.svg__ytbnx)}
                        role={"img"}
                      />
                    }
                    long={"long" as const}
                    title={"Building the Simple Ecosystem"}
                  />
                </p.Stack>

                <div className={classNames(defaultcss.all, sty.freeBox__jmbIj)}>
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__bwk2M)}
                    src={"/plasmic/test_project/images/simpleProject.png"}
                  />

                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__d4LPj)}
                    src={"/plasmic/test_project/images/task.png"}
                  />
                </div>
              </p.Stack>
            </p.Stack>
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__dtBh)}>
            <div className={classNames(defaultcss.all, sty.freeBox___9VdOa)} />

            <div className={classNames(defaultcss.all, sty.freeBox__enJjU)}>
              <div className={classNames(defaultcss.all, sty.freeBox__tcXi2)}>
                <Section
                  className={classNames("__wab_instance", sty.section__xgXdc)}
                  subtitle={
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                  }
                  title={"How Simple works"}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__v1Z1I)}
                >
                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__q0RIp
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <SwapIcon
                        className={classNames(defaultcss.all, sty.svg___2MqBr)}
                        role={"img"}
                      />
                    }
                    title={"Initial Contact"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__qnW5X
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <SlotIcon
                        className={classNames(defaultcss.all, sty.svg__hG4Bd)}
                        role={"img"}
                      />
                    }
                    title={"Discovery Session"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__i36J
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <CycleIcon
                        className={classNames(defaultcss.all, sty.svg__aj7So)}
                        role={"img"}
                      />
                    }
                    title={"Contracting"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__nc1Sg
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <HammerIcon
                        className={classNames(defaultcss.all, sty.svg__kFjEd)}
                        role={"img"}
                      />
                    }
                    title={"Fast Prototyping"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard___1Ii3K
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <PencilIcon
                        className={classNames(defaultcss.all, sty.svg__aQsR)}
                        role={"img"}
                      />
                    }
                    title={"Design Phase"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__sjAmi
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <LightningIcon
                        className={classNames(defaultcss.all, sty.svg__a6LIq)}
                        role={"img"}
                      />
                    }
                    title={"Develop & Launch"}
                  />
                </p.Stack>
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox___5Gk4T)} />
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox___7TTmB)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__njnos)}
            >
              <Section
                className={classNames("__wab_instance", sty.section__mr2On)}
                subtitle={
                  "Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
                }
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__xfErF)}
              >
                <FacebookLogoIcon
                  className={classNames(defaultcss.all, sty.svg__gGqq)}
                  role={"img"}
                />

                <TinderLogoIcon
                  className={classNames(defaultcss.all, sty.svg__mpX6O)}
                  role={"img"}
                />

                <AirbnbLogoIcon
                  className={classNames(defaultcss.all, sty.svg__lrGtb)}
                  role={"img"}
                />

                <HubspotLogoIcon
                  className={classNames(defaultcss.all, sty.svg__raarh)}
                  role={"img"}
                />

                <AmazonLogoIcon
                  className={classNames(defaultcss.all, sty.svg__jKq2S)}
                  role={"img"}
                />
              </p.Stack>

              <Testimonial
                data-plasmic-name={"testimonial"}
                data-plasmic-override={overrides.testimonial}
                className={classNames("__wab_instance", sty.testimonial)}
              />

              <HomeCta
                data-plasmic-name={"homeCta"}
                data-plasmic-override={overrides.homeCta}
                className={classNames("__wab_instance", sty.homeCta)}
              />

              <Footer
                data-plasmic-name={"footer"}
                data-plasmic-override={overrides.footer}
                className={classNames("__wab_instance", sty.footer)}
              />
            </p.Stack>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "topSection", "testimonial", "homeCta", "footer"],
  header: ["header"],
  topSection: ["topSection"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof TopSection;
  testimonial: typeof Testimonial;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHome__Fetches;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */