import {StructureResolver} from "sanity/structure";
import {TagIcon} from '@sanity/icons/Tag';
import {DocumentTextIcon} from '@sanity/icons/DocumentText';
import {UserIcon} from '@sanity/icons/User';
import {CogIcon} from '@sanity/icons/Cog'

export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Posts")
        .icon(DocumentTextIcon)
        .child(S.documentTypeList("post")),

      S.listItem()
        .title("Categories")
        .icon(TagIcon)
        .child(S.documentTypeList("category")),

      S.listItem()
        .title("Authors")
        .icon(UserIcon)
        .child(S.documentTypeList("author")),

      S.divider(),

      S.listItem()
        .title("Website Settings")
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType("settings")
            .documentId("websiteSettings")
        ),
    ]);