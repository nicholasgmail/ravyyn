<template>
		<div class="screenContainer center">
		    <img id="viewApplicantChosenExit" @click="showScreen('shippingAddressScreen')" src="@/assets/icons/chevron-down.svg">
		    <h1>Shipping Address</h1>
		    <div class="shippingAddressContainer flexColumn">
		    	<div class="flexRow">
    				<div class="dropdownRectangle half">
    					<p>John</p>
    				</div>
    				<div class="dropdownRectangle half">
    					<p>Doe</p>
    				</div>
    			</div>
    			<div class="dropdownRectangle">
    				<p>599 White Park Blvd</p>
    			</div>
		        <div class="dropdownRectangle">
    				<p>#333</p>
    			</div>
    			<div class="flexRow">
    				<div class="dropdownRectangle half">
    					<p>Boise</p>
    				</div>
    				<div class="dropdownRectangle half">
    					<p>ID</p>
    				</div>
    			</div>
    			<div class="flexRow">
    				<div class="dropdownRectangle half">
    					<p>83703</p>
    				</div>
    				<div class="dropdownRectangle half">
    					<p>U.S.</p>
    				</div>
    			</div>
		    </div>
	</div>
</template>