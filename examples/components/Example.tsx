import React from 'react';
import {match} from 'path-to-regexp';
import makeSchemaRenderer from './SchemaRender';

import IndexPageSchema from './Index';
import ErrorPageSchema from './Page/Error';
import FormPageSchema from './Page/Form';
import ModeFormSchema from './Form/Mode';
import FieldSetFormSchema from './Form/FieldSet';
import TabsFormSchema from './Form/Tabs';
import RemoteFormSchema from './Form/Remote';
import ReactionFormSchema from './Form/Reaction';
import ValidationFormSchema from './Form/Validation';
import FullFormSchema from './Form/Full';
import StaticFormSchema from './Form/Static';
import HintFormSchema from './Form/Hint';
import FieldSetInTabsFormSchema from './Form/FieldSetInTabs';
import ComboFormSchema from './Form/Combo';
import ConditionBuilderSchema from './Form/ConditionBuilder';
import StyleBuilderSchema from './Form/StyleBuilder';
import SubFormSchema from './Form/SubForm';
import RichTextSchema from './Form/RichText';
import EditorSchema from './Form/Editor';
import TestFormSchema from './Form/Test';
import TransferFormSchema from './Form/Transfer';
import TableFormSchema from './Form/Table';
import PickerFormSchema from './Form/Picker';
import FormulaFormSchema from './Form/Formula';
import CustomFormSchema from './Form/Custom';
import FormLayoutTestSchema from './Form/layoutTest';
import Definitions from './Form/Definitions';
import AnchorNav from './Form/AnchorNav';

import TableCrudSchema from './CRUD/Table';
import TableAutoFillSchema from './CRUD/TableAutoFill';
import ItemActionsSchema from './CRUD/ItemActions';
import GridCrudSchema from './CRUD/Grid';
import ListCrudSchema from './CRUD/List';
import LoadMoreSchema from './CRUD/LoadMore';
import TestCrudSchema from './CRUD/test';
import FixedCrudSchema from './CRUD/Fix';
import AsideCrudSchema from './CRUD/Aside';
import Aside2CrudSchema from './CRUD/Aside2';
import FieldsCrudSchema from './CRUD/Fields';
import JumpNextCrudSchema from './CRUD/JumpNext';
import PopOverCrudSchema from './CRUD/PopOver';
import KeyboardsCrudSchema from './CRUD/Keyboards';
import FootableCrudSchema from './CRUD/Footable';
import NestedCrudSchema from './CRUD/Nested';
import MergeCellSchema from './CRUD/MergeCell';
import HeaderGroupSchema from './CRUD/HeaderGroup';
import HeaderHideSchema from './CRUD/HeaderHide';
import LoadOnceTableCrudSchema from './CRUD/LoadOnce';
import ExportCSVExcelSchema from './CRUD/ExportCSVExcel';
import CRUDDynamicSchema from './CRUD/Dynamic';
import SdkTest from './Sdk/Test';
import JSONSchemaForm from './Form/Schem';
import SimpleDialogSchema from './Dialog/Simple';
import DrwaerSchema from './Dialog/Drawer';

import PageLinkPageSchema from './Linkage/Page';
import FormLinkPageSchema from './Linkage/Form';
import Form2LinkPageSchema from './Linkage/Form2';
import CRUDLinkPageSchema from './Linkage/CRUD';
import OptionsPageSchema from './Linkage/Options';
import OptionsLocalPageSchema from './Linkage/OptionsLocal';
import WizardSchema from './Wizard';
import ChartSchema from './Chart';
import EChartsEditorSchema from './ECharts';
import HorizontalSchema from './Horizontal';
import VideoSchema from './Video';
import AudioSchema from './Audio';
import CarouselSchema from './Carousel';
import TasksSchema from './Tasks';
import ServicesDataSchema from './Services/Data';
import ServicesSchemaSchema from './Services/Schema';
import ServicesFormSchema from './Services/Form';
import IFrameSchema from './IFrame';

import NormalTabSchema from './Tabs/Normal';
import FormTabSchema from './Tabs/Form';
import DynamicTabSchema from './Tabs/Dynamic';
import Tab1Schema from './Tabs/Tab1';
import Tab2Schema from './Tabs/Tab2';
import Tab3Schema from './Tabs/Tab3';
import TestComponent from './Test';
import APP from './APP/index';
import {normalizeLink} from '../../src/utils/normalizeLink';

export const examples = [
  {
    // prefix: ({classnames: cx}) => <li className={cx('AsideNav-divider')} />,
    label: '??????',
    children: [
      {
        label: '??????',
        icon: 'fa fa-th',
        badge: 3,
        badgeClassName: 'bg-info',
        children: [
          {
            label: '????????????',
            path: '/examples/index',
            component: makeSchemaRenderer(IndexPageSchema)
          },
          {
            label: '???????????????',
            path: '/examples/pages/error',
            component: makeSchemaRenderer(ErrorPageSchema)
          },
          {
            label: '????????????',
            path: '/examples/pages/form',
            component: makeSchemaRenderer(FormPageSchema)
          }
        ]
      },

      {
        label: '??????',
        icon: 'fa fa-list-alt',
        children: [
          {
            label: '??????????????????',
            path: '/examples/form/mode',
            component: makeSchemaRenderer(ModeFormSchema)
          },

          {
            label: '??????????????????',
            path: '/examples/form/full',
            component: makeSchemaRenderer(FullFormSchema)
          },

          {
            label: '????????????',
            path: '/examples/form/static',
            component: makeSchemaRenderer(StaticFormSchema)
          },

          {
            label: '????????????',
            path: '/examples/form/hint',
            component: makeSchemaRenderer(HintFormSchema)
          },

          {
            label: 'FieldSet',
            path: '/examples/form/fieldset',
            component: makeSchemaRenderer(FieldSetFormSchema)
          },

          {
            label: 'Tabs',
            path: '/examples/form/tabs',
            component: makeSchemaRenderer(TabsFormSchema)
          },

          {
            label: 'FieldSet Tabs ??????',
            path: '/examples/form/fields-tabs',
            component: makeSchemaRenderer(FieldSetInTabsFormSchema)
          },

          {
            label: '????????????',
            path: '/examples/form/remote',
            component: makeSchemaRenderer(RemoteFormSchema)
          },

          {
            label: '??????????????????',
            path: '/examples/form/reaction',
            component: makeSchemaRenderer(ReactionFormSchema)
          },

          {
            label: '????????????',
            path: '/examples/form/validation',
            component: makeSchemaRenderer(ValidationFormSchema)
          },

          {
            label: '????????????',
            path: '/examples/form/combo',
            component: makeSchemaRenderer(ComboFormSchema)
          },

          {
            label: '?????????',
            path: '/examples/form/transfer',
            component: makeSchemaRenderer(TransferFormSchema)
          },

          {
            label: '??????????????????',
            path: '/examples/form/picker',
            component: makeSchemaRenderer(PickerFormSchema)
          },

          {
            label: '?????????',
            path: '/examples/form/sub-form',
            component: makeSchemaRenderer(SubFormSchema)
          },

          // {
          //   label: 'JSon Schema??????',
          //   path: '/examples/form/json-schema',
          //   component: JSONSchemaForm
          // },

          {
            label: '?????????',
            path: '/examples/form/rich-text',
            component: makeSchemaRenderer(RichTextSchema)
          },

          {
            label: '???????????????',
            path: '/examples/form/ide',
            component: makeSchemaRenderer(EditorSchema)
          },

          {
            label: '???????????????',
            path: '/examples/form/custom',
            component: makeSchemaRenderer(CustomFormSchema)
          },

          {
            label: '????????????',
            path: '/examples/form/table',
            component: makeSchemaRenderer(TableFormSchema)
          },

          {
            label: '????????????',
            path: '/examples/form/formula',
            component: makeSchemaRenderer(FormulaFormSchema)
          },
          {
            label: '????????????',
            path: '/examples/form/condition-builder',
            component: makeSchemaRenderer(ConditionBuilderSchema)
          },

          {
            label: '??????',
            path: '/examples/form/definitions',
            component: makeSchemaRenderer(Definitions)
          },

          {
            label: '????????????',
            path: '/examples/form/style-builder',
            component: makeSchemaRenderer(StyleBuilderSchema)
          },

          {
            label: '????????????',
            path: '/examples/form/anchor-nav',
            component: makeSchemaRenderer(AnchorNav)
          }

          // {
          //     label: '????????????',
          //     path: '/examples/form/layout-test',
          //     component: makeSchemaRenderer(FormLayoutTestSchema)
          // },

          // {
          //     label: '??????',
          //     path: '/examples/form/test',
          //     component: makeSchemaRenderer(TestFormSchema)
          // },
        ]
      },

      {
        label: '????????????',
        icon: 'fa fa-table',
        children: [
          {
            label: '????????????',
            path: '/examples/crud/table',
            component: makeSchemaRenderer(TableCrudSchema)
          },
          {
            label: '?????????????????????',
            path: '/examples/crud/auto-fill',
            component: makeSchemaRenderer(TableAutoFillSchema)
          },
          {
            label: '????????????',
            path: '/examples/crud/grid',
            component: makeSchemaRenderer(GridCrudSchema)
          },
          {
            label: '????????????',
            path: '/examples/crud/list',
            component: makeSchemaRenderer(ListCrudSchema)
          },
          {
            label: '??????????????????',
            path: '/examples/crud/load-more',
            component: makeSchemaRenderer(LoadMoreSchema)
          },
          {
            label: '??????????????????',
            path: '/examples/crud/item-actions',
            component: makeSchemaRenderer(ItemActionsSchema)
          },
          {
            label: '???????????????',
            path: '/examples/crud/columns',
            component: makeSchemaRenderer(FieldsCrudSchema)
          },
          {
            label: '?????????',
            path: '/examples/crud/footable',
            component: makeSchemaRenderer(FootableCrudSchema)
          },
          {
            label: '??????',
            path: '/examples/crud/nested',
            component: makeSchemaRenderer(NestedCrudSchema)
          },
          {
            label: '???????????????',
            path: '/examples/crud/merge-cell',
            component: makeSchemaRenderer(MergeCellSchema)
          },
          {
            label: '????????????',
            path: '/examples/crud/header-group',
            component: makeSchemaRenderer(HeaderGroupSchema)
          },
          {
            label: '????????????',
            path: '/examples/crud/header-hide',
            component: makeSchemaRenderer(HeaderHideSchema)
          },
          {
            label: '??????????????? tree???',
            path: '/examples/crud/aside',
            component: makeSchemaRenderer(AsideCrudSchema)
          },
          {
            label: '??????????????? Nav???',
            path: '/examples/crud/aside2',
            component: makeSchemaRenderer(Aside2CrudSchema)
          },
          {
            label: '????????????/???',
            path: '/examples/crud/fixed',
            component: makeSchemaRenderer(FixedCrudSchema)
          },
          {
            label: '??????????????????',
            path: '/examples/crud/keyboards',
            component: makeSchemaRenderer(KeyboardsCrudSchema)
          },
          {
            label: '??????????????????',
            path: '/examples/crud/jump-next',
            component: makeSchemaRenderer(JumpNextCrudSchema)
          },
          {
            label: '???????????????',
            path: '/examples/crud/popover',
            component: makeSchemaRenderer(PopOverCrudSchema)
          },
          {
            label: '???????????????',
            path: '/examples/crud/load-once',
            component: makeSchemaRenderer(LoadOnceTableCrudSchema)
          },
          {
            label: '?????? Excel/CSV',
            path: '/examples/crud/export-excel-csv',
            component: makeSchemaRenderer(ExportCSVExcelSchema)
          },
          {
            label: '?????????',
            path: '/examples/crud/dynamic',
            component: makeSchemaRenderer(CRUDDynamicSchema)
          }
          // {
          //     label: '??????',
          //     path: '/examples/crud/test',
          //     component: makeSchemaRenderer(TestCrudSchema)
          // }
        ]
      },

      {
        label: '??????',
        icon: 'fa fa-bomb',
        children: [
          {
            label: '?????????',
            path: '/examples/dialog/simple',
            component: makeSchemaRenderer(SimpleDialogSchema)
          },
          {
            label: '????????????',
            path: '/examples/dialog/drawer',
            component: makeSchemaRenderer(DrwaerSchema)
          }
        ]
      },

      {
        label: '?????????',
        icon: 'fa fa-clone',
        children: [
          {
            label: '???????????????',
            path: '/examples/tabs/normal',
            component: makeSchemaRenderer(NormalTabSchema)
          },

          {
            label: '????????????????????????',
            path: '/examples/tabs/form',
            component: makeSchemaRenderer(FormTabSchema)
          },

          {
            label: '???????????????',
            path: '/examples/tabs/dynamic',
            component: makeSchemaRenderer(DynamicTabSchema)
          },
          {
            label: '???????????????1',
            path: '/examples/tabs/tab1',
            component: makeSchemaRenderer(Tab1Schema)
          },
          {
            label: '???????????????2',
            path: '/examples/tabs/tab2',
            component: makeSchemaRenderer(Tab2Schema)
          },
          {
            label: '???????????????3',
            path: '/examples/tabs/tab3',
            component: makeSchemaRenderer(Tab3Schema)
          }
        ]
      },

      {
        label: '??????',
        icon: 'fa fa-bolt',
        children: [
          {
            label: '???????????????????????????',
            path: '/examples/linkpage/page',
            component: makeSchemaRenderer(PageLinkPageSchema)
          },
          {
            label: '????????????',
            path: '/examples/linkpage/options-local',
            component: makeSchemaRenderer(OptionsLocalPageSchema)
          },
          {
            label: '??????????????????',
            path: '/examples/linkpage/options',
            component: makeSchemaRenderer(OptionsPageSchema)
          },
          {
            label: '?????????????????????',
            path: '/examples/linkpage/form',
            component: makeSchemaRenderer(FormLinkPageSchema)
          },
          {
            label: '??????????????????',
            path: '/examples/linkpage/form2',
            component: makeSchemaRenderer(Form2LinkPageSchema)
          },
          {
            label: '?????????????????????',
            path: '/examples/linkpage/crud',
            component: makeSchemaRenderer(CRUDLinkPageSchema)
          }
        ]
      },

      {
        label: '????????????',
        icon: 'fa fa-magic',
        children: [
          {
            label: '??????????????????',
            path: '/examples/services/data',
            component: makeSchemaRenderer(ServicesDataSchema)
          },
          {
            label: '??????????????????',
            path: '/examples/services/schema',
            component: makeSchemaRenderer(ServicesSchemaSchema)
          },
          {
            label: '????????????????????????',
            path: '/examples/services/form',
            component: makeSchemaRenderer(ServicesFormSchema)
          }
        ]
      },

      {
        label: '??????',
        icon: 'fa fa-desktop',
        path: '/examples/wizard',
        component: makeSchemaRenderer(WizardSchema)
      },

      {
        label: '??????',
        icon: 'fa fa-columns',
        path: '/examples/horizontal',
        component: makeSchemaRenderer(HorizontalSchema)
      },

      {
        label: '??????',
        icon: 'fa fa-bar-chart',
        path: '/examples/chart',
        component: makeSchemaRenderer(ChartSchema)
      },

      {
        label: 'ECharts ?????????',
        icon: 'fa fa-bar-chart',
        path: '/examples/echarts',
        component: makeSchemaRenderer(EChartsEditorSchema)
      },
      {
        label: '?????????',
        icon: 'fa fa-pause',
        path: '/examples/carousel',
        component: makeSchemaRenderer(CarouselSchema)
      },
      {
        label: '??????',
        icon: 'fa fa-volume-up',
        path: '/examples/audio',
        component: makeSchemaRenderer(AudioSchema)
      },
      {
        label: '??????',
        icon: 'fa fa-video-camera',
        path: '/examples/video',
        component: makeSchemaRenderer(VideoSchema)
      },
      {
        label: '????????????',
        icon: 'fa fa-tasks',
        path: '/examples/task',
        component: makeSchemaRenderer(TasksSchema)
      },
      {
        label: 'IFrame',
        icon: 'fa fa-cloud',
        path: '/examples/iframe',
        component: makeSchemaRenderer(IFrameSchema)
      },

      {
        label: 'SDK',
        icon: 'fa fa-rocket',
        path: '/examples/sdk',
        component: SdkTest
      },

      {
        label: 'APP ????????????',
        icon: 'fa fa-cubes',
        path: '/examples/app',
        component: makeSchemaRenderer(APP, false, {
          session: 'app',
          jumpTo: (to: string) => {
            location.hash = to;
          },
          updateLocation: (to, replace) => {
            if (to === 'goBack') {
              return window.history.back();
            }

            if (replace && window.history.replaceState) {
              window.history.replaceState(
                '',
                document.title,
                normalizeLink(to)
              );
              return;
            }

            window.history.pushState('', document.title, normalizeLink(to));
          },
          isCurrentUrl: (to: string, ctx: any) => {
            if (!to) {
              return false;
            }
            const pathname = location.hash ? location.hash.substring(1) : '/';
            const link = normalizeLink(to, {
              ...location,
              pathname,
              hash: ''
            });

            if (!~link.indexOf('http') && ~link.indexOf(':')) {
              return match(link, {
                decode: decodeURIComponent,
                strict: ctx?.strict ?? true
              })(pathname);
            }

            return pathname === encodeURI(link);
          }
        })
      }

      // {
      //   label: 'Test',
      //   icon: 'fa fa-code',
      //   path: '/examples/test',
      //   component: TestComponent
      // }
    ]
  }
];

export default class Example extends React.PureComponent {
  componentDidMount() {
    this.props.setNavigations(examples);
  }

  componentDidUpdate() {
    this.props.setNavigations(examples);
  }

  render() {
    return (
      <>
        {React.cloneElement(this.props.children, {
          ...this.props.children.props,
          theme: this.props.theme,
          classPrefix: this.props.classPrefix,
          locale: this.props.locale,
          viewMode: this.props.viewMode,
          offScreen: this.props.offScreen
        })}
      </>
    );
  }
}
