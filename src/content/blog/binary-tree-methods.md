---
layout: '@layouts/BlogPost.astro'
title: Binary Tree Methods
desc: A walk through on how the differen't methods of a binary tree.
date: 2023-05-10
tag: programming
img:
    src: /images/binary_tree.png
    alt: binary tree
    contain: true
    bgColor: 'radial-gradient(circle, rgb(63, 76, 107) 0%, rgb(96, 108, 136) 100%)'
---

## Insertion

To add a new value, we need to find the lowest level that has a node without two children. Then we can create a new node on the leftmost empty space. We can achieve this using a queue.

```java title="FileName.java"
public void insert(int value) {
	Node node = new Node(value);
	if (root == null) {
		root = node;
	} else {
		Queue<Node> queue = new LinkedList<>();
		queue.add(root);
		while (!queue.isEmpty()) {
			Node current = queue.remove();
			if (current.left == null) {
				current.left = node;
				break;
			} else {
				queue.add(current.left);
			}
			if (current.right == null) {
				current.right = node;
				break;
			} else {
				queue.add(current.right);
			}
		}
	}
}
```

## Contains

To check for a value, we can use recursion. Our recursive function will do the following:

```
FUNCTION recursiveFunc(node, searchValue)
	IF node is null
		return false
	ELSE IF node.value equals searchValue
		return true
	ELSE
		return recursiveFunc(node.left, searchValue) OR recursiveFunc(node.left, searchValue
```

All we have to do in our public function is call the recursive function using the root node and the value being searched for as the parameters.

```java
private boolean contains(Node current, int value) {
	if (current == null) {
		return false;
	} else if (current.value == value) {
		return true;
	} else {
		return contains(current.left, value) || contains(current.right, value);
	}
}

public boolean contains(int value) {
	return contains(root, value);
}
```

## Remove

Of the three methods, removal is defiantly the most complicated. We need to find the value to be removed and replace it with the value in the bottom-rightmost node. We'll break the process down into three steps.

### 1. Edge cases

Before we get into the more complicated code, let's check some edge cases. If the root is null or childless, there's no need to go on.

```java
if (root == null) {
	return null;
}
if (root.left == null && root.right == null) {
	if (root.value.equals(value)) {
		root = null;
		return value;
	} else {
		return null;
	}
}
```

### 2. Search for value

If none of the edge cases apply, we need to move on. We'll search by iterating from top-left to bottom-right. Once again, we'll do this with a queue. After we find the value, we are going to keep iterating. That way, the final value we land on will be the bottom-rightmost node. Ring any bells? We'll store both the node to be deleted and the bottom-right node in variables.

```java
Node nodeToReplace = null;
Node current = null; // Will end up the bottom-right most node.
Queue<Node> queue = new LinkedList<>();
queue.add(root);
while (!queue.isEmpty()) {
	current = queue.remove();
	if (current.value.equals(value)) {
		nodeToReplace = current;
	}
	if (current.left != null) {
		queue.add(current.left);
	}
	if (current.right != null) {
		queue.add(current.right);
	}
}
```

### 3. Replace and Delete

Finally, we need to do two things:

1. Extract the value from, and then delete, the bottom-rightmost node.
2. Replace the value to be deleted with the value extracted from the last step.

To delete the bottom-rightmost node, we must iterate through the tree again. Once again, we'll do this with a queue, but this time we'll go from the top right to the bottom left.

```java
// remember, `current` is now the bottom-right most node
int replacementValue = current.value;
deleteDeepest(current);
nodeToReplace.value = replacementValue;
return value;

/* ... */

private void deleteDeepest(Node delNode) {
	Queue<Node> queue = new LinkedList<>();
	queue.add(root);
	while (!queue.isEmpty()) {
		Node current = queue.remove();
		if (current.right != null) {
			if (current.right.value.equals(delNode.value)) {
				current.right = null;
				return;
			}
			queue.add(current.right);
		}
		if (current.left != null) {
			if (current.left.value.equals(delNode.value)) {
				current.left = null;
				return;
			}
			queue.add(current.left);
		}
	}
}
```
