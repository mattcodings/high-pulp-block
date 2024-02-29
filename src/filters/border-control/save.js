import {addFilter} from '@wordpress/hooks';

function addBorderDiv(element, blockType, attributes) {
	let divStyles = {
		borderStyle: attributes.borderStyle || 'none',
		borderWidth: attributes.borderWidth + 'px' || '2px',
		borderColor: attributes.borderColor || 'black',
		padding: attributes.borderPadding + 'px',
		borderRadius:attributes.borderRadius + 'px'
	}

	// WARNING!!!
	// This will invalidate all existing blocks, because now you've
	// changed their save content. Only do this for blocks
	// within your namespace.

	// This also only works for static blocks.
	return (<div className="border-control" style={divStyles}>{element}</div>);
}

addFilter('blocks.getSaveElement', 'mz/border-control/add-border-element', addBorderDiv);

