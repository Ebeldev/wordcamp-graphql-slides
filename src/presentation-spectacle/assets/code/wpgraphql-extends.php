<?php
use WPGraphQL\Types;

function wcgql_add_custom_fields_to_graphql ($fields) {
	$fields['custom'] = [
		'type' 			=> Types::String(),
		'description'	=> __( 'The date the film was released', 'wcmtl-graphql' ),
		'resolve'		=> function ( \WP_Post $post ) {
			// Get your data
			$customField = get_post_meta( $post->ID, 'custom_field_name', true );
			// make any modification on your data

			// Return your data
			return $customField;
		},
	];

	return $fields;
}

add_filter( 'graphql_post_fields', 'wcgql_add_custom_fields_to_graphql', 10, 1 );