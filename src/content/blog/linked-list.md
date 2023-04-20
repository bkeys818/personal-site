---
layout: '@layouts/BlogPost.astro'
title: Linear Data Structures - Linked List
desc: An explination of what linked list are, how they work, and when to use them.
date: 2023-04-15
tag: programming
img:
    src: /images/linked_list_cover.png
    alt: linked list
    bgColor: fff
---

# Linear Data Structures - Linked List

![linked list](/images/linked_list.png)

Linked list work by by using nodes. Each node contains the data and a reference to the next node. The final node’s reference will point to `null`. The first node is called the head of the list.

## Insertion

![linked list](/images/linked_list_insertion.png)

To insert a new item, iterate to the location of the insertion, and change where the `next` reference points. Then assign the following node to the new nodes `next` reference.

## Deletion

![linked list insert process](/images/linked_list_deletion.png)

Deletion works by iterating to the node before the one you’d like to delete, and pointing its `next` reference to the node following the one you’d like to delete.

## Double & Circular

![double linked list.png](/images/linked_list_double.png)

Double linked list also have a reference to the last node.

![circular linked list.png](/images/linked_list_circular.png)

In circular linked list, instead of the last node pointing to `null`, it points to the first node.

## Use Cases

I find link list the most complicated of all the structures. It’s fairly easy to understand how it works, but knowing when to use it is the challenge.

Linked list are great when you

- need efficient insertion/deletion.
- don’t know how many items there will be.

They’re not the best choice if you

- need to access items by index.
- need speed when iterating
- are limited on memory

Some great uses cases for linked list are

- the steps in a navigation app
- back and next buttons in a browser
- undo and redo button in an editor
